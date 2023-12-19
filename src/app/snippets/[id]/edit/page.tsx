import Button from '@/components/button';
import Container from '@/components/container';
import Hero from '@/components/hero';
import { db } from '@/db';
import { redirect } from 'next/navigation';
import SnippetImage from 'public/bg-1.jpg';
import { useState } from 'react';

interface EditSnippetProps {
  params: {
    id: string;
  };
}

const editSnippet = async (formData: FormData) => {
  'use server';
  const languageId = Number(formData.get('language')) || 0;
  const newSnippet = await db.snippet.create({
    data: {
      title: formData.get('title') as string,
      body: formData.get('code') as string,
      languageId: languageId,
    },
  });
  redirect(`/snippets/${newSnippet.id}`);
};

export default async function EditSnippet(props: EditSnippetProps) {
  const snippet = await db.snippet.findUnique({
    where: {
      id: parseInt(props.params.id),
    },
    include: {
      language: true,
    },
  });
  const languages = await db.language.findMany();
  const renderLanguages = languages.map((language) => {
    return (
      <option key={language.id} value={language.id}>
        {language.name}
      </option>
    );
  });
  // 'use client';
  // const [value, setValue] = useState('');

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
        <div className="w-full mx-auto mt-8">
          <h1 className="bold text-2xl mb-3">Create a snippet</h1>
          <form action={editSnippet} method="PUT" className="w-full">
            <div className="w-full mb-3">
              <label htmlFor="title" className="semi-bold">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="rounded border w-full py-3 px-2"
                value={snippet?.title}
              />
            </div>
            <div className="w-full mb-3">
              <label htmlFor="code" className="semi-bold">
                Code
              </label>
              <textarea
                id="code"
                name="code"
                rows={5}
                className="rounded border w-full py-3 px-2"
                value={snippet?.body}
              ></textarea>
              {/* <FroalaEditorComponent /> */}
            </div>
            <div className="w-full mb-5 flex flex-col">
              <label htmlFor="language" className="semi-bold">
                Language
              </label>
              <select
                id="language"
                name="language"
                className="rounded border w-full py-3 px-2"
                value={snippet?.language.id}
              >
                {renderLanguages}
              </select>
            </div>
            <Button
              button={true}
              text={'Save'}
              mode="save"
              addClass="float-right"
            />
          </form>
        </div>
      </Container>
    </div>
  );
}
