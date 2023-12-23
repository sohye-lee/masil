'use server';
import Button from '@/components/button';
import Container from '@/components/container';
import Hero from '@/components/hero';
import Tip from '@/components/tip';
import { db } from '@/db';
import Link from 'next/link';
import TalkImage from 'public/bg-3.jpg';

export default async function ResourcesPage() {
  const tips = await db.tip.findMany({
    include: {
      language: true,
    },
  });

  const renderTips =
    !tips || tips.length < 1 ? (
      <div>
        <p className="text-slate-600">No resource found.</p>
      </div>
    ) : (
      tips.map((t) => {
        return (
          <Tip
            key={t.id}
            id={t.id}
            language={t.language}
            title={t.title}
            link={t.link}
            comment={t?.comment || ''}
            liked={t.liked || 0}
          />
        );
      })
    );
  return (
    <div className="w-full">
      <Hero
        title="Resources"
        description="Information from various resources"
        imgAlt=""
        imgData={TalkImage}
      />
      <Container wide={false}>
        <div className="w-full flex flex-col gap-3">
          <div className="flex">
            <Button
              button={false}
              link="/tips/new"
              mode="success"
              size="medium"
              text="Create"
            />
          </div>
          {renderTips}
        </div>
      </Container>
    </div>
  );
}
