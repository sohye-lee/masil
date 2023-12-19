import Hero from '@/components/hero';
import { db } from '@/db';
import Snippet from '@/components/snippet';
import Container from '@/components/container';
import Link from 'next/link';
import HomeImage from 'public/bg-2.jpg';

export default async function Home() {
  const topics = await db.topic.findMany();
  const renderTopics = topics.map((topic) => {
    return <div key={topic.id}>{topic.name}</div>;
  });
  const languages = await db.language.findMany();
  const renderLanguages = languages.map((language) => {
    return <div key={language.id}>{language.name}</div>;
  });

  const snippets = await db.snippet.findMany({
    take: 5,
    include: {
      language: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: [{ createdAt: 'desc' }],
  });
  const renderSnippets = snippets.map((snippet) => {
    return (
      <Snippet
        key={snippet.id}
        id={snippet.id}
        title={snippet.title}
        body={snippet.body}
        liked={snippet.liked || 0}
        language={snippet.language}
      />
    );
  });

  const questions = await db.question.findMany();
  const renderQuestions = questions.map((q) => {
    return (
      <Link className="p-3 bg-slate-50" key={q.id} href={`/questions/${q.id}`}>
        <h4 className="font-semibold">{q.title}</h4>
        <p>{q.description}</p>
        <p className="text-sm">{q.liked ? q.liked : 0}</p>
        <p>{q.topicId}</p>
      </Link>
    );
  });
  return (
    <div className="w-full">
      <Hero
        title="Home"
        description="here is the place"
        imgAlt=""
        imgData={HomeImage}
      />

      <Container wide={false}>
        <div className="flex items-end justify-between mb-3 mt-8">
          <h3 className="text-2xl font-medium   text-blue-800">All Snippets</h3>
          <Link
            href="/snippets"
            className="rounded-md bg-blue-800 text-white px-2 py-1 text-sm"
          >
            View All
          </Link>
        </div>
        {renderSnippets}
      </Container>
    </div>
  );
}
