import Button from '@/components/button';
import Container from '@/components/container';
import Hero from '@/components/hero';
import { db } from '@/db';
import { notFound, redirect } from 'next/navigation';
import SnippetImage from 'public/bg-1.jpg';
import SnippetEditForm from '@/components/snippet-edit-form';

interface EditSnippetProps {
  params: {
    id: string;
  };
}

export default async function EditSnippet(props: EditSnippetProps) {
  const snippet = await db.snippet.findUnique({
    where: {
      id: parseInt(props.params.id),
    },
    include: {
      language: true,
    },
  });

  if (!snippet) {
    return notFound();
  }
 
  const languages = await db.language.findMany();

  return (
    <div className="w-full">
      <Hero title="Snippets" description="" imgAlt="" imgData={SnippetImage} />
      <Container wide={false}>
        <div className="flex items-end mb-3 mt-8">
          <Button
            button={false}
            text="< Go Back"
            mode="neutral"
            size="small"
            link={`/snippets/${snippet?.id}`}
          />
        </div>
        <SnippetEditForm snippet={snippet} languages={languages}  />
      </Container>
    </div>
  );
}
