'use client';
import { Language, Snippet } from '@prisma/client';
import Button from './button';
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import * as actions from '@/actions';

interface SnippetProps {
  id: number;
  title: string;
  body: string;
  language: Language;
}

interface SnippetEditProps {
  snippet: SnippetProps;
  languages: Language[];
}

export default function SnippetEditForm({
  snippet,
  languages,
}: SnippetEditProps) {
  'use client';
  const renderLanguages = languages.map((language) => {
    return (
      <option key={language.id} value={language.id}>
        {language.name}
      </option>
    );
  });

  const [body, setBody] = useState(snippet.body);
  const [title, setTitle] = useState(snippet.title);
  const handleEditorChange = (value: string = '') => {
    setBody(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, title, body);

  return (
    <div className="w-full mx-auto mt-8">
      <h1 className="bold text-2xl mb-3">Edit a snippet</h1>
      <form action={editSnippetAction} method="PUT" className="w-full">
        <div className="w-full mb-3">
          <label htmlFor="title" className="semi-bold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="rounded border w-full py-3 px-2"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full mb-3">
          <label htmlFor="code" className="semi-bold">
            Code
          </label>
          {/* <textarea
                    id="code"
                    name="code"
                    rows={5}
                    className="rounded border w-full py-3 px-2"
                    value={snippet?.body}
                    ></textarea> */}
          <Editor
            height="30vh"
            defaultLanguage={snippet?.language.name}
            defaultValue={snippet?.body}
            options={{ minimap: { enabled: false } }}
            onChange={handleEditorChange}
          />
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
        <div className="flex items-align justify-end">
            <Button
                button={true}
                text={'Save'}
                mode="save"
                addClass="float-right"
            />
        </div>
      </form>
    </div>
  );
}
