import type { Metadata } from "next";
import "./globals.scss";
import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: "闇鍋検索",
  description: "このページの検索ボックスに何かを入力すると，ランダムで選ばれた世界中の検索エンジンを使って検索できます．",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={styles.body}>
        {children}
      </body>
    </html>
  );
}
