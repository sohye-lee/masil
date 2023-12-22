import Container from '@/components/container';
import Hero from '@/components/hero';
import { db } from '@/db';
import TalkImage from 'public/bg-3.jpg';

export default async function ResourcesPage() {
  const resources = await db.resource.findMany();
  const renderResources = resources.map(r => {
    return <p>r.title</p>
  })
  return (
    <div className="w-full">
      <Hero
        title="Resources"
        description="Information from various resources"
        imgAlt=""
        imgData={TalkImage}
      />
      <Container wide={false}>
      {renderResources}
      </Container>
    </div>
  );
}
