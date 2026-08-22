import { places, shops } from './shops.js';

export const matchesFilters = (shop, filters) => [...filters].every((tag) => shop.tags.includes(tag));
export function distanceKm(a, b) {
  const rad = (value) => value * Math.PI / 180;
  const dLat = rad(b.lat - a.lat), dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return Number((12742 * Math.asin(Math.sqrt(h))).toFixed(1));
}
export function recommendationScore(shop, filters) {
  const { nagoya, dayDrink, value, quattroAccess } = shop.scores;
  return nagoya * 4 + dayDrink * (filters.has('dayDrink') ? 4 : 1) + value * 2 + quattroAccess * 3;
}

if (typeof document !== 'undefined') {
  const tags = [['dayDrink','昼飲み可能'],['nagoya','名古屋めし'],['light','軽め'],['hearty','ガッツリ'],['under1500','1,500円以下'],['under3000','3,000円以下'],['hitsumabushi','ひつまぶし'],['miso','味噌系'],['noodles','麺類'],['cafe','喫茶店']];
  const state = { filters: new Set(), sort: 'recommended', selected: null, current: null, query: '' };
  const els = Object.fromEntries(['filterChips','sort','locate','locationStatus','shopList','recommendations','search','count'].map((id) => [id, document.getElementById(id)]));
  const map = L.map('map', { scrollWheelZoom: false }).setView([35.1628, 136.9065], 14);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
  const markers = new Map();
  const startIcon = icon('S','#2563eb'), goalIcon = icon('G','#dc2626');
  L.marker(places.urbanQua, { icon: startIcon }).addTo(map).bindPopup('<strong>アーバンクア</strong>');
  L.marker(places.clubQuattro, { icon: goalIcon }).addTo(map).bindPopup('<strong>名古屋クラブクアトロ</strong>');
  for (const shop of shops) {
    const marker = L.marker([shop.lat, shop.lng]).addTo(map).bindPopup(popup(shop));
    marker.on('click', () => selectShop(shop.id, false)); markers.set(shop.id, marker);
  }
  map.fitBounds(L.latLngBounds([...shops.map((s) => [s.lat, s.lng]), [places.urbanQua.lat, places.urbanQua.lng], [places.clubQuattro.lat, places.clubQuattro.lng]]).pad(.1));

  function icon(letter, color) { return L.divIcon({ className: 'place-icon', html: `<span style="background:${color}">${letter}</span>`, iconSize: [32,32], iconAnchor: [16,16] }); }
  function popup(shop) { return `<b>${escapeHtml(shop.name)}</b><br><small>${escapeHtml(shop.category)} · ${escapeHtml(shop.budgetLabel)}</small><p>${escapeHtml(shop.weekendHours)}</p><a href="${shop.mapsUrl}" target="_blank" rel="noopener">Google Maps</a>`; }
  function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, (c) => ({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;' })[c]); }
  function origin() { return state.sort === 'current' ? state.current : state.sort === 'start' ? places.urbanQua : state.sort === 'goal' ? places.clubQuattro : places.clubQuattro; }
  function visible() {
    const q = state.query.toLowerCase();
    return shops.filter((shop) => matchesFilters(shop, state.filters) && [shop.name,shop.category,shop.specialty,shop.address].join(' ').toLowerCase().includes(q))
      .sort((a,b) => state.sort === 'recommended' ? recommendationScore(b,state.filters) - recommendationScore(a,state.filters) : distanceKm(origin(),a)-distanceKm(origin(),b));
  }
  function rating(value) { return `<span class="rating" aria-label="5段階中${value}">${'●'.repeat(value)}${'○'.repeat(5-value)}</span>`; }
  function card(shop) { const selected = shop.id === state.selected ? ' is-selected' : ''; const distance = distanceKm(origin(), shop); return `<article class="shop-card${selected}" data-id="${shop.id}"><div class="card-top"><div><p class="eyebrow">${escapeHtml(shop.category)}</p><h3>${escapeHtml(shop.name)}</h3></div><strong class="distance">${distance} km</strong></div><p class="specialty">${escapeHtml(shop.specialty)}</p><p class="hours">${escapeHtml(shop.weekendHours)}</p>${shop.note ? `<p class="notice">${escapeHtml(shop.note)}</p>` : ''}<div class="badges"><span>${escapeHtml(shop.budgetLabel)}</span>${shop.tags.includes('dayDrink') ? '<span>昼飲み</span>' : ''}</div><dl class="scores"><div><dt>名古屋感</dt><dd>${rating(shop.scores.nagoya)}</dd></div><div><dt>昼飲み</dt><dd>${rating(shop.scores.dayDrink)}</dd></div><div><dt>コスパ</dt><dd>${rating(shop.scores.value)}</dd></div><div><dt>クアトロ</dt><dd>${rating(shop.scores.quattroAccess)}</dd></div></dl><div class="actions"><button type="button" data-select="${shop.id}">地図で見る</button><a href="${shop.mapsUrl}" target="_blank" rel="noopener">Google Maps</a><a href="${shop.officialUrl}" target="_blank" rel="noopener">店舗情報</a></div></article>`; }
  function selectShop(id, move = true) { state.selected = id; const shop = shops.find((item) => item.id === id); if (move) { map.setView([shop.lat,shop.lng],17,{animate:true}); markers.get(id).openPopup(); } render(); }
  function render() { const items = visible(); els.count.textContent = `${items.length}店`; els.shopList.innerHTML = items.map(card).join('') || '<p class="empty">該当する店がありません。条件を外してみてください。</p>'; els.recommendations.innerHTML = items.slice(0,3).map((s,i) => `<button type="button" data-select="${s.id}"><small>おすすめ ${i+1}</small>${escapeHtml(s.name)}<span>${s.specialty}</span></button>`).join(''); for (const [id, marker] of markers) { const show = items.some((s) => s.id === id); show ? marker.addTo(map) : map.removeLayer(marker); marker.setOpacity(id === state.selected ? 1 : .72); } document.querySelectorAll('[data-select]').forEach((button) => button.addEventListener('click', () => selectShop(button.dataset.select))); }
  tags.forEach(([value,label]) => { const button = document.createElement('button'); button.type='button'; button.textContent=label; button.addEventListener('click', () => { state.filters.has(value) ? state.filters.delete(value) : state.filters.add(value); button.classList.toggle('active',state.filters.has(value)); render(); }); els.filterChips.append(button); });
  els.search.addEventListener('input', (event) => { state.query = event.target.value; render(); });
  els.sort.addEventListener('change', (event) => { if (event.target.value === 'current' && !state.current) { els.locationStatus.textContent='「現在地を使う」を押して許可してください。'; event.target.value=state.sort; return; } state.sort=event.target.value; render(); });
  els.locate.addEventListener('click', () => { if (!navigator.geolocation) { els.locationStatus.textContent='このブラウザは現在地取得に対応していません。'; return; } els.locationStatus.textContent='現在地を取得中です。'; navigator.geolocation.getCurrentPosition(({coords}) => { state.current={lat:coords.latitude,lng:coords.longitude}; state.sort='current'; els.sort.value='current'; els.locationStatus.textContent='現在地から近い順に並べています。'; render(); }, () => { els.locationStatus.textContent='現在地を取得できませんでした。'; }, { enableHighAccuracy:false, timeout:10000, maximumAge:300000 }); });
  render();
}
