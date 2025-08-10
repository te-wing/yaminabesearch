export interface SearchEngine {
  name: string;
  url: string;
}

// 検索エンジン一覧
export const searchEngines: SearchEngine[] = [
  { name: 'Google', url: 'https://www.google.com/search?q=' },
  { name: 'Bing', url: 'https://www.bing.com/search?q=' },
  { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=' },
  { name: 'Yahoo!', url: 'https://search.yahoo.com/search?p=' },
  { name: 'Ecosia', url: 'https://www.ecosia.org/search?q=' },
  { name: 'Startpage', url: 'https://www.startpage.com/sp/search?q=' },
  { name: 'Brave Search', url: 'https://search.brave.com/search?q=' },
  { name: 'Wolfram|Alpha', url: 'https://www.wolframalpha.com/input?i='},
  { name: 'Yahoo! JAPAN', url: 'https://search.yahoo.co.jp/search?p='},
  { name: 'Baidu', url:'https://www.baidu.com/s?wd='},
  { name: 'Naver', url:'https://search.naver.com/search.naver?query='},
  { name: 'Coc Coc', url:'https://coccoc.com/search?query='},
  { name: 'Yandex', url:'https://yandex.com/search/?text='},
  { name: 'Mojeek', url:'https://www.mojeek.com/search?q='},
];