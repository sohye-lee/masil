import Hero from '@/components/hero';
import TalkImage from 'public/bg-3.jpg';

export default function ResourcesPage() {
  return (
    <div className="w-full">
      <Hero
        title="Resources"
        description="Information from various resources"
        imgAlt=""
        imgData={TalkImage}
      />
    </div>
  );
}
