import test from 'node:test';
import assert from 'node:assert/strict';
import { distanceKm, matchesFilters, recommendationScore } from '../app.js';

test('複数タグをすべて満たす店だけを残す', () => {
  assert.equal(matchesFilters({ tags: ['nagoya', 'miso'] }, new Set(['nagoya', 'miso'])), true);
  assert.equal(matchesFilters({ tags: ['nagoya', 'miso'] }, new Set(['dayDrink'])), false);
});

test('同じ地点の距離は0km', () => {
  assert.equal(distanceKm({ lat: 35.16, lng: 136.9 }, { lat: 35.16, lng: 136.9 }), 0);
});

test('名古屋感とクアトロへの行きやすさが高い店を優先する', () => {
  const high = { scores: { nagoya: 5, dayDrink: 3, value: 3, quattroAccess: 5 } };
  const low = { scores: { nagoya: 2, dayDrink: 3, value: 3, quattroAccess: 2 } };
  assert.ok(recommendationScore(high, new Set()) > recommendationScore(low, new Set()));
});
