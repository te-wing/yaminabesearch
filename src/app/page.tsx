'use client';

import styles from './page.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { FormEvent, ChangeEvent } from 'react';

export default function Home() {
  const [searchWord, setSearchWord] = useState<string>('');
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchWord) {
      const url = `/search?q=${encodeURIComponent(searchWord)}`;
      router.push(url);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>闇鍋検索</h1>
      </header>
      <form onSubmit={handleSubmit} id='searchForm'>
        <input
          onChange={handleInputChange}
          type='text'
          value={searchWord}
          id='searchInput'
          name='word'
          placeholder='なんか入力して検索'
        />
        <button type='submit'>
          検索！
        </button>
      </form>
      <footer>
        {/* フッターの内容 */}
      </footer>
    </>
  );
}