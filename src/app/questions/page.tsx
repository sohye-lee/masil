import ShoolImage from 'public/bg-2.jpg';
import Hero from '@/components/hero';
import { db } from '@/db';

export default async function QuestionsPage() {
  return (
    <div className="w-full">
      <Hero
        title="Questions"
        description="Ask and Get Answers"
        imgAlt=""
        imgData={ShoolImage}
      />
    </div>
  );
}
