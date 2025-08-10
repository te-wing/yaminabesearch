export interface SearchEngine {
  name: string;
  url: string;
}

// 検索エンジンの一覧です。ここに追加・削除・変更ができます。
export const searchEngines: SearchEngine[] = [
  { name: 'Google', url: 'https://www.google.com/search?q=' },
  { name: 'Bing', url: 'https://www.bing.com/search?q=' },
  { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=' },
  { name: 'Yahoo!', url: 'https://search.yahoo.com/search?p=' },
];