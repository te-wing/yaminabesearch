import { Suspense } from 'react';
import SearchRedirect from '@/components/SearchRedirect';
import styles from './page.module.scss';

export default function SearchPage() {
  return (
    <>
      <Suspense fallback={
        <svg width="50" height="50" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#e0e0e0" strokeWidth="4"></circle>
          <circle cx="25" cy="25" r="20" fill="none" stroke="#007bff" strokeWidth="4" strokeDasharray="31.4" strokeDashoffset="31.4" strokeLinecap="round" className={styles.spinnerCircle}></circle>
        </svg>
      }>
        <SearchRedirect />
      </Suspense>
    </>
  );
}