import Button from '@/components/button';
import Container from '@/components/container';
import Hero from '@/components/hero';
import { db } from '@/db';
import SnippetImage from 'public/bg-1.jpg';

export default async function SnippetPage(props: any) {
  const snippet = await db.snippet.findUnique({
    where: {
      id: parseInt(props.params.id),
    },
    include: {
      language: true,
    },
  });
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
            link="/snippets/new"
          />
        </div>
        <div className="w-full mx-auto mt-8">
          <div className="font-sm text-slate-500 flex items-center gap-1 mb-2">
            <span className="text-[14px] capitalize p-1 border border-slate-800 rounded-sm text-slate-800">
              {snippet?.language.name}
            </span>
            <span className="text-[14px] capitalize p-1 border border-slate-800 rounded-sm text-slate-800">
              Question {snippet?.id}
            </span>
          </div>
          <h1 className="font-semibold text-2xl">{snippet?.title}</h1>
          <div className="font-md text-white mt-3 py-5 pb-8 px-5 rounded-md bg-slate-800 border">
            <pre>
              <code id="textToCopy">{snippet?.body}</code>
            </pre>
          </div>
          <div className="mt-5 flex justify-end gap-3">
            <Button
              button={false}
              text="Edit"
              mode="save"
              size="medium"
              link={`/snippets/${snippet?.id}/edit`}
            />
            <Button
              button={false}
              text="Delete"
              mode="danger"
              size="medium"
              link={`/snippets/${snippet?.id}/delete`}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
