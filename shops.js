export const places = {
  urbanQua: { name: 'アーバンクア', lat: 35.1499, lng: 136.9130 },
  clubQuattro: { name: '名古屋クラブクアトロ', lat: 35.1655, lng: 136.9074 },
};

const source = '2026-08-22確認';
const makeShop = (id, name, address, lat, lng, category, specialty, weekendHours, budgetLabel, budgetMax, tags, scores, officialUrl, note = '') => ({
  id, name, address, lat, lng, category, specialty, weekendHours, budgetLabel, budgetMax, tags, scores,
  officialUrl, mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address}`)}`,
  verifiedAt: '2026-08-22', source, note,
});

export const shops = [
  makeShop('senju','天むす千寿 大須本店','名古屋市中区大須4-10-82',35.1596,136.9062,'天むす・軽食','天むす','土日祝 8:30〜18:00（火・水休、売切れ次第終了）','〜1,000円',1000,['nagoya','light','under1500'],{nagoya:5,dayDrink:1,value:4,quattroAccess:3},'https://www.tenmusu-nagoya.com/'),
  makeShop('suzuya','すゞ家 赤門店','名古屋市中区大須3-11-17',35.1580,136.9050,'味噌カツ・洋食','味噌カツ','土日祝 11:00〜15:00／17:00〜21:30（木休）','1,000〜2,000円',2000,['nagoya','miso','hearty','under3000'],{nagoya:5,dayDrink:1,value:4,quattroAccess:3},'https://www.nagoya-info.jp/gourmet/detail/100/','営業時間は要事前確認'),
  makeShop('kanou','味処 叶','名古屋市中区栄3-4-110',35.1662,136.9080,'味噌カツ','元祖味噌カツ丼','土 11:00〜14:30／17:00〜20:30、日祝 11:00〜14:30（月・火休）','1,000〜2,000円',2000,['nagoya','miso','hearty','under3000'],{nagoya:5,dayDrink:1,value:4,quattroAccess:5},'https://www.misokatu-kanou.com/','祝日は要事前確認'),
  makeShop('nagomidori','とりかつ なごみどり','名古屋市中区大須3-33-1',35.1589,136.9060,'鶏料理','手羽先・とり味噌串カツ','土 11:00〜16:00／17:00〜21:00、日 11:00〜16:00／16:30〜21:00','1,500〜3,000円',3000,['nagoya','miso','dayDrink','under3000'],{nagoya:4,dayDrink:5,value:4,quattroAccess:3},'https://osu.nagoya/ja/shop.php?s=NKAoBO'),
  makeShop('chara','大須の溜まりbar CHARA','名古屋市中区大須2-13-17',35.1568,136.9017,'昼飲み','居酒屋料理・酒','土日 11:00〜23:00（祝日休、SNS要確認）','2,000〜4,000円',4000,['dayDrink'],{nagoya:3,dayDrink:5,value:3,quattroAccess:2},'https://www.instagram.com/osunotamaribar_chara/'),
  makeShop('yabuya','やぶ屋 大須店','名古屋市中区大須3-46-3',35.1579,136.9083,'居酒屋','名古屋系居酒屋料理','土日祝 12:00〜翌7:00','2,000〜4,000円',4000,['nagoya','dayDrink'],{nagoya:3,dayDrink:5,value:3,quattroAccess:3},'https://www.yabuya.com/shop/yabuya_oosu'),
  makeShop('takara','味噌にこみ たから','名古屋市中区大須2-16-17',35.1606,136.9055,'味噌煮込み','味噌煮込みうどん','土日祝 11:30〜14:45／17:00〜19:00（木休）','1,000〜2,000円',2000,['nagoya','miso','noodles','under3000'],{nagoya:5,dayDrink:1,value:4,quattroAccess:3},'https://www.nagoya-info.jp/gourmet/detail/63/'),
  makeShop('miyukitei','御幸亭','名古屋市中区大須3-39-45',35.1585,136.9039,'老舗洋食','エビフライ・味噌カツ','土日 11:00〜14:30／17:30〜19:30（水休）','1,000〜2,000円',2000,['nagoya','miso','hearty','under3000'],{nagoya:4,dayDrink:1,value:4,quattroAccess:3},'https://osu.nagoya/ja/shop.php?s=b5yZgK','祝日は要事前確認'),
  makeShop('konparu','コンパル 大須本店','名古屋市中区大須3-20-19',35.1607,136.9048,'喫茶店','エビフライサンド・小倉トースト','土日祝 8:00〜19:00','〜1,500円',1500,['nagoya','cafe','light','under1500'],{nagoya:5,dayDrink:1,value:4,quattroAccess:3},'https://konparu.co.jp/shop/index.html'),
  makeShop('asahiro','手打めん処 浅ひろ本店','名古屋市中区大須3-20-21',35.1593,136.9043,'麺','手打ちうどん','土日 11:00〜15:30／17:00〜19:30','〜1,500円',1500,['noodles','light','under1500'],{nagoya:3,dayDrink:1,value:4,quattroAccess:3},'https://osu.nagoya/ja/shop.php?s=pOY1bO','祝日は要事前確認'),
  makeShop('seroli','大須せろり 大須本店','名古屋市中区橘1-7-36',35.1590,136.9057,'鉄板・洋食','鉄板料理','土日祝 11:00〜15:30／17:00〜22:00（火休）','1,000〜2,000円',2000,['hearty','under3000'],{nagoya:3,dayDrink:2,value:4,quattroAccess:3},'https://www.seroli.com/access/'),
  makeShop('marukei','磯料理 まるけい','名古屋市中区大須3-43-1',35.1582,136.9038,'海鮮','海鮮・日本酒','土 11:00〜13:30／17:00〜21:30（日祝休）','1,500〜3,000円',3000,['dayDrink','under3000'],{nagoya:3,dayDrink:4,value:3,quattroAccess:3},'https://www.marukei-osu.com/','日祝は休業'),
  makeShop('mukashi-yabaton','昔の矢場とん 大須観音本店','名古屋市中区大須2-21-32',35.1570,136.8999,'串カツ・味噌おでん','みそおでん・串カツ','土日祝 11:00〜21:00','1,500〜3,000円',3000,['nagoya','miso','dayDrink','under3000'],{nagoya:5,dayDrink:5,value:4,quattroAccess:2},'https://www.yabaton.com/modules/shop/index.php?content_id=29'),
  makeShop('yabaton','矢場とん 矢場町本店','名古屋市中区大須3-6-18',35.1651,136.9075,'味噌カツ','わらじとんかつ','土日祝 11:00〜21:00','1,500〜2,500円',2500,['nagoya','miso','hearty','under3000'],{nagoya:5,dayDrink:2,value:3,quattroAccess:5},'https://www.yabaton.com/modules/shop/index.php?content_id=2'),
  makeShop('yaba-misen','台湾料理 矢場味仙','名古屋市中区大須3-6-3',35.1658,136.9088,'台湾料理','台湾ラーメン','土日祝 11:30〜15:00／17:00〜翌1:00','1,000〜2,000円',2000,['nagoya','noodles','hearty','under3000'],{nagoya:5,dayDrink:3,value:4,quattroAccess:5},'https://yabamisen.jp/'),
  makeShop('sole','そ〜れ','名古屋市中区栄4-9-10 愛信プラザビル103',35.1682,136.9069,'あんかけスパ','あんかけスパゲティ','土 11:00〜15:00／17:00〜22:00、日休、祝 11:00〜15:00','1,000〜1,500円',1500,['nagoya','noodles','hearty','under1500'],{nagoya:5,dayDrink:1,value:4,quattroAccess:4},'https://so-le.co.jp/access/'),
  makeShop('yokoi','スパゲッティハウス ヨコイ 住吉本店','名古屋市中区栄3-10-11 サントウビル2F',35.1667,136.9079,'あんかけスパ','ミラカン','土 11:00〜15:00／17:00〜21:00、日祝 11:00〜15:00','1,000〜1,500円',1500,['nagoya','noodles','hearty','under1500'],{nagoya:5,dayDrink:1,value:4,quattroAccess:5},'https://www.yokoi-anspa.jp/'),
  makeShop('como','あんかけスパゲティ コモ 本店','名古屋市中区栄3-4-5 スカイル9F',35.1687,136.9088,'あんかけスパ','あんかけスパ','土日 11:00〜20:00（不定休）','1,000〜1,500円',1500,['nagoya','noodles','hearty','under1500'],{nagoya:4,dayDrink:1,value:4,quattroAccess:4},'https://como-spa.com/shop/'),
  makeShop('hanaoka','ひつまぶし花岡','名古屋市中区栄3-8-115 サンリツノースビル2F',35.1683,136.9079,'ひつまぶし','ひつまぶし','営業時間は店舗へ要確認','3,000〜5,000円',5000,['nagoya','hitsumabushi','hearty'],{nagoya:5,dayDrink:2,value:3,quattroAccess:4},'https://hitsuabushi-hanaoka.shopinfo.jp/','営業時間を要事前確認'),
  makeShop('shirakawa','しら河 栄ガスビル店','名古屋市中区栄3-15-33 栄ガスビル地下1F',35.1706,136.9057,'ひつまぶし','ひつまぶし','土日祝 11:00〜15:00／17:00〜21:30（木休）','3,000〜5,000円',5000,['nagoya','hitsumabushi','hearty'],{nagoya:5,dayDrink:2,value:3,quattroAccess:4},'https://hitsumabushi.jp/tenpo/sakaegasubiruten'),
  makeShop('houraiken','あつた蓬莱軒 松坂屋店','名古屋市中区栄3-30-8 松坂屋名古屋店南館10F',35.1651,136.9081,'ひつまぶし','ひつまぶし','土日祝 11:00〜22:00（火休、祝日は営業）','4,000〜6,000円',6000,['nagoya','hitsumabushi','hearty'],{nagoya:5,dayDrink:2,value:3,quattroAccess:5},'https://www.houraiken.com/'),
  makeShop('togawa','炭焼きうなぎ・かしわ 登河 栄店','名古屋市中区栄3-28-119',35.1670,136.9096,'うなぎ','ひつまぶし・かしわ','土日祝 11:00〜15:00／17:30〜22:00（水休）','3,000〜5,000円',5000,['nagoya','hitsumabushi','hearty'],{nagoya:4,dayDrink:2,value:3,quattroAccess:5},'https://www.matsuri-group.jp/shop/togawa/shoplist.html'),
  makeShop('munagi','炭焼ひつまぶし鰻 むなぎ','名古屋市中区栄4-17-21 栄D-1ビル地下1F',35.1690,136.9080,'うなぎ','ひつまぶし','土日祝 11:00〜23:00','3,000〜5,000円',5000,['nagoya','hitsumabushi','hearty'],{nagoya:4,dayDrink:3,value:3,quattroAccess:4},'https://nagoyaunagi.com/'),
  makeShop('hirudake','昼だけうなぎ屋 栄本店','名古屋市中区栄3-13-6 オー・ド・ヴィー栄2F',35.1692,136.9063,'うなぎ','うな重','土日祝 11:00〜14:30（不定休）','2,000〜4,000円',4000,['nagoya','hitsumabushi','hearty'],{nagoya:4,dayDrink:1,value:4,quattroAccess:4},'https://unagihirudake.com/shop/'),
  makeShop('artory','大須アートリーキッチン','名古屋市中区上前津1-1-1 西上前津ビル1F',35.1586,136.9086,'ランチ','定食・おばんざい','土祝は予約のみの案内あり','1,500〜3,000円',3000,['dayDrink','under3000'],{nagoya:2,dayDrink:3,value:3,quattroAccess:3},'https://artorykitchen.com/','土日祝の営業を要事前確認'),
  makeShop('nikubei','肉米雄一飯店','名古屋市中区大須3-14-43 第2アメ横ビル2F',35.1587,136.9067,'定食','肉料理・定食','土日祝 11:30〜24:00','1,000〜2,000円',2000,['hearty','under3000'],{nagoya:2,dayDrink:3,value:4,quattroAccess:3},'https://nikubei.net/'),
  makeShop('gorakutei','互楽亭','名古屋市中区大須2-17-12',35.1576,136.9058,'定食','定食・洋食','土日祝の営業時間は店舗へ要確認','〜1,500円',1500,['light','under1500'],{nagoya:3,dayDrink:1,value:4,quattroAccess:3},'https://www.kinsyachi.com/shop/0000778/','住所・営業時間を要事前確認'),
  makeShop('tonton','トンジスカン 豚都','名古屋市中区大須3-40-32 ループビル1F',35.1583,136.9075,'豚料理','豚焼肉','土 11:45〜15:00／17:00〜24:00、日 11:45〜14:30／17:30〜23:00','1,500〜3,000円',3000,['hearty','dayDrink','under3000'],{nagoya:3,dayDrink:4,value:3,quattroAccess:3},'https://tabelog.com/aichi/A2301/A230105/23072431/','祝日は要事前確認'),
  makeShop('dungeon','大須ダンジョン食堂','名古屋市中区大須3-36-4',35.1591,136.9068,'食堂','定食・カフェ飯','土日祝 11:00〜19:30（不定休）','1,000〜2,000円',2000,['hearty','under3000'],{nagoya:2,dayDrink:1,value:4,quattroAccess:3},'https://osu-dungeon.owst.jp/'),
  makeShop('onimaru','ごちそう焼むすび おにまる 大須店','名古屋市中区大須3-31-12 岩野屋ビル1F',35.1597,136.9072,'おにぎり・軽食','焼きむすび','土日祝 10:00〜20:00','〜1,000円',1000,['light','under1500'],{nagoya:2,dayDrink:1,value:4,quattroAccess:3},'https://www.onimaru-net.com/'),
];
