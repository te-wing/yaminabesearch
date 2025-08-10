import { redirect } from 'next/navigation';
import { searchEngines } from '@/data/searchEngines';

export default function SearchPage({
  searchParams,
}) {
  const query = searchParams.q;

  if (!query || typeof query !== 'string') {
    redirect('/');
  }

  const randomIndex = Math.floor(Math.random() * searchEngines.length);
  const selectedEngine = searchEngines[randomIndex];

  const redirectUrl = `${selectedEngine.url}${encodeURIComponent(query)}`;

  redirect(redirectUrl);
}