import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>闇鍋検索</h1>
      </header>
      <section>
        <input type='text' placeholder='なんか入力して検索'></input>
        <button>
          検索！
        </button>
      </section>
      <footer>
        
      </footer>
    </>
  );
}
