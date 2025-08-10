import { redirect } from 'next/navigation';
import { searchEngines } from '@/data/searchEngines';

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

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