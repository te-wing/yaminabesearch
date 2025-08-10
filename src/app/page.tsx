'use client'

import styles from './page.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import type { FormEvent, ChangeEvent } from 'react';

export default function Home() {
  const [searchWord, setSearchWord] = useState<string>(''); // string型を指定
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // デフォルトのフォーム送信をキャンセル
    if (searchWord) {
      const url = `/search?word=${encodeURIComponent(searchWord)}`;
      router.push(url);
    }
  };


  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>闇鍋検索</h1>
      </header>
      <form onSubmit={handleSubmit} id='searchForm'>
        <input onChange={handleInputChange} type='text' value={searchWord} id='searchInput' name='word' placeholder='なんか入力して検索'></input>
        <button type='submit'>
          検索！
        </button>
      </form>
      <footer>

      </footer>
    </>
  );
}