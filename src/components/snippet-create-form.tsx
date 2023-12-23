'use client';

import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import Button from './button';
import { Editor } from '@monaco-editor/react';
import Input from './input';
import LanguageOptions from './languageOptions';

export default function SnippetCreateForm() {
  // const [body, setBody] = useState('');
  // const [formData, setFormData] = useState({title: "", body});
  // const [myLanguageId, setMyLanguageId] = useState('');
  const [formState, action] = useFormState(actions.createSnippet, {
    message: '',
  });
  // const [languages, setLanguages] = useState<Promise<Language[]>> ()

  // const handleEditorChange = (e:string = '') => {
  //     setBody(e);
  // };

  // const createSnippetAction = actions.createSnippet.bind(null,);
  // let myLanguageName = "javascript";

  // useEffect(() => {
  //     const dbLanguages: Promise<Language[]> = actions.getLanguages() || Array<Language>;
  //     if (dbLanguages) {
  //         setLanguages(dbLanguages);
  //     }

  //     actions.getLanguage(Number(myLanguageId)).then(res => {
  //         if (res) {
  //             myLanguageName = res.name;
  //         }
  //     });

  // }, [])

  return (
    <div className="w-full mt-8">
      <h1 className="bold text-2xl mb-3 mt-8">Create a snippet</h1>
      <form
        action={action}
        method="POST"
        className="w-full flex flex-col gap-3"
      >
        <Input type="input" id="title" name="title" label="Title" />
        <Input type="textarea" id="code" name="code" rows={10} label="Code" />
        {/* <div className="w-full mb-3">
                        <Editor
                            height="30vh"
                            // language={myLanguageName}
                            defaultLanguage="javascript"
                            // defaultValue={body}
                            // value={body}
                            options={{ minimap: { enabled: false } }}
                            onChange={handleEditorChange}
                            className="border border-slate-200 rounded overflow-hidden"
                        />
                    </div> */}
        <LanguageOptions />
        {/* <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="language" className="semi-bold">Language</label>
                        <select id="language" name="language" className="rounded border w-full py-3 px-2" onChange={e => setMyLanguageId((e.target as HTMLSelectElement).value)}>
                            <option disabled selected>Select</option>
                            { (await languages)?.map(language => {
                               return <option key={language.id} value={language.id}>{language.name}</option>
                            }) }
                        </select>
                    </div> */}
        {formState.message && formState.message != '' ? (
          <div className="mb-4 rounded bg-orange-100 border border-orange-200 text-orange-700 py-1 px-2 text-xs ">
            {formState.message}
          </div>
        ) : null}
        <div className="flex items-center justify-end gap-3">
          <Button button={true} text={'Create'} mode="success" />
          <Button
            button={false}
            link="/snippets"
            text={'Cancel'}
            mode="neutral"
          />
        </div>
      </form>
    </div>
  );
}
