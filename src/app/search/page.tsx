import { redirect } from 'next/navigation';

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // 検索エンジンのリストを定義します。必要に応じてここに追加・変更してください。
  const searchEngines = [
    { name: 'Google', url: 'https://www.google.com/search?q=' },
    { name: 'Bing', url: 'https://www.bing.com/search?q=' },
    { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=' },
  ];

  // URLからクエリパラメータ（'q'）を取得します。
  const query = searchParams.q;

  // クエリがない場合は、トップページにリダイレクトします。
  if (!query || typeof query !== 'string') {
    redirect('/');
  }

  // リストからランダムに検索エンジンを一つ選びます。
  const randomIndex = Math.floor(Math.random() * searchEngines.length);
  const selectedEngine = searchEngines[randomIndex];

  // 選んだ検索エンジンのURLにクエリを付加します。
  const redirectUrl = `${selectedEngine.url}${encodeURIComponent(query)}`;

  // 指定されたURLへリダイレクトします。
  redirect(redirectUrl);
}