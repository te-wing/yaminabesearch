'use client';
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { searchEngines } from '@/data/searchEngines';

export default function SearchRedirect() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const query = searchParams.get('q');
    if (!query || typeof query !== 'string') {
      router.push('/');
      return;
    }

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * searchEngines.length);
      const selectedEngine = searchEngines[randomIndex];
      const redirectUrl = `${selectedEngine.url}${encodeURIComponent(query)}`;
      window.location.href = redirectUrl;
    }, 500);
  }, [searchParams, router]);

  return null; // このコンポーネント自体はUIをレンダリングしない
}