import ShoolImage from 'public/bg-2.jpg';
import Hero from '@/components/hero';
import { db } from '@/db';
import Container from '@/components/container';
import Question from '@/components/question';

export default async function QuestionsPage() {
  const questions = await db.question.findMany({
    include: {
      topic: true,
    },
  });

  const renderQuestions = questions.map((q) => {
    return (
      <Question
        key={q.id}
        id={q.id}
        title={q.title}
        topic={q.topic}
        liked={q.liked || 0}
        description={q.description || ''}
      />
    );
  });

  return (
    <div className="w-full">
      <Hero
        title="Questions"
        description="Ask and Get Answers"
        imgAlt=""
        imgData={ShoolImage}
      />
      <Container wide={false}>
        {questions ? renderQuestions : 'No questions yet.'}
      </Container>
    </div>
  );
}
