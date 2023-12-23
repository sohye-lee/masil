import Container from '@/components/container';
import Hero from '@/components/hero';
import { db } from '@/db';
import SnippetImage from 'public/bg-1.jpg';
import { Copy, Heart } from 'react-feather';
import { copyText } from '@/util';
import Button from '@/components/button';
import { notFound } from 'next/navigation';
// import { confirmAlert } from "react-confirm-alert";
import * as actions from '@/actions';

export default async function SnippetPage(props: any) {
  'use server';
  const snippet = await db.snippet.findUnique({
    where: {
      id: parseInt(props.params.id),
    },
    include: {
      language: true,
    },
  });

  if (!snippet) {
    notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="w-full">
      <Hero
        title={snippet?.title || 'Snippet'}
        description=""
        imgAlt=""
        imgData={SnippetImage}
      />
      <Container wide={false}>
        <p className="font-sm text-slate-500 flex items-center gap-1 mb-3">
          <span className="text-sm   border bg-blue-100 border-blue-200 h-[26px] flex justify-center px-1 items-center">
            {snippet?.language.name}
          </span>
          <span className="text-sm   gap-1 border bg-pink-100 border-pink-200 h-[26px] flex justify-center px-1 items-center">
            <Heart stroke="#f00" width="14" />
            {snippet?.liked}
          </span>
        </p>
        <h1 className="font-semibold text-2xl">{snippet?.title}</h1>
        <div
          id="copyContent"
          className="relative font-md text-white mt-3 py-3 px-4 rounded bg-stone-700 border"
        >
          <pre>
            <code>{snippet?.body}</code>
          </pre>
          <button
            onClick={copyText}
            id="copyBtn"
            className="absolute bottom-3 right-3 outline-none flex align-items gap-3"
          >
            <div
              id="copyResult"
              className="hidden border-1 border-stone-400 bg-stone-600 rounded-sm py-1 px-2 text-xs text-white"
            ></div>
            <Copy color="#fff" width="20" />
          </button>
        </div>
        <div className="flex items-align justify-end gap-3 mt-5">
          <Button
            text="Edit"
            button={false}
            link={`/snippets/${snippet?.id}/edit`}
            size="medium"
            mode="save"
          />
          <form
            action={deleteSnippetAction}
            method="DELETE"
            className="inline p-0 m-0"
          >
            <Button mode="danger" size="medium" text="Delete" button={true} />
          </form>
          <Button
            text="Back to List"
            button={false}
            link={'/snippets'}
            size="medium"
            mode="neutral"
          />
        </div>
      </Container>
    </div>
  );
}
