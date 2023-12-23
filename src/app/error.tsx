'use client';

import Container from '@/components/container';
import Header from '@/components/header';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <>
      <Header />
      <Container wide={false}>
        <div className="bg-slate-100 border border-slate-200 font-md">
          {error.message}
        </div>
      </Container>
    </>
  );
}
