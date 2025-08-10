'use client';

import styles from './page.module.scss';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
// 元のコードと同様に、外部ファイルから検索エンジンのリストをインポート
import { searchEngines } from '@/data/searchEngines';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // ① URLパラメータからクエリを取得
    const query = searchParams.get('q');

    // ② クエリがない場合はルートページにリダイレクト
    if (!query || typeof query !== 'string') {
      router.push('/');
      return;
    }
    

    setTimeout(() => {
      // ③ ランダムな検索エンジンを選択
      const randomIndex = Math.floor(Math.random() * searchEngines.length);
      const selectedEngine = searchEngines[randomIndex];

      // ④ リダイレクトURLを構築
      const redirectUrl = `${selectedEngine.url}${encodeURIComponent(query)}`;

      // ⑤ 構築したURLへリダイレクト
      window.location.href = redirectUrl;
    }, 500);
  }, [searchParams, router]);

  // リダイレクトが完了するまでの間に表示するUI
  return (
    <>
      <svg width="50" height="50" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke="#e0e0e0" stroke-width="4"></circle>
        <circle cx="25" cy="25" r="20" fill="none" stroke="#007bff" stroke-width="4" stroke-dasharray="31.4" stroke-dashoffset="31.4" stroke-linecap="round" className={styles.spinnerCircle}></circle>
      </svg>
    </>
  );
}