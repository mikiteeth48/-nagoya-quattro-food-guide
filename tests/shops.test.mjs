import test from 'node:test';
import assert from 'node:assert/strict';
import { shops } from '../shops.js';

test('全店舗が地図と絞り込みに必要な情報を持つ', () => {
  assert.equal(shops.length, 30);

  for (const shop of shops) {
    assert.ok(shop.id && shop.name && shop.address && shop.weekendHours);
    assert.ok(Number.isFinite(shop.lat) && shop.lat > 35.1 && shop.lat < 35.2);
    assert.ok(Number.isFinite(shop.lng) && shop.lng > 136.8 && shop.lng < 137);
    assert.ok(Array.isArray(shop.tags) && shop.tags.length > 0);
    assert.ok(Number.isInteger(shop.budgetMax) && shop.budgetMax > 0);
    assert.match(shop.mapsUrl, /^https:\/\/www\.google\.com\/maps\//);
    assert.match(shop.officialUrl, /^https:\/\//);
    assert.ok(shop.verifiedAt && shop.source);
  }
});
