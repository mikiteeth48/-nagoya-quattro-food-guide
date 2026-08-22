import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const indexHtml = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');

test('モバイルでも2件目以降のおすすめを非表示にしない', () => {
  assert.doesNotMatch(indexHtml, /\.recommendations button:not\(:first-child\)\s*\{\s*display\s*:\s*none\s*\}/);
});

test('公開手順はアプリ一式をリポジトリのルートに置くよう案内する', () => {
  assert.match(readme, /このディレクトリ全体を新しいGitHubリポジトリのルートに置く/);
  assert.doesNotMatch(readme, /この `index\.html` をGitHubリポジトリのルートに置く/);
});
