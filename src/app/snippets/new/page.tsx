import {db} from '@/db';
import { redirect } from 'next/navigation';
import { Editor } from '@tinymce/tinymce-react';


const createSnippet =  async (formData:FormData) => {
    'use server';
    const languageId = Number(formData.get('language')) || 0;
    const newSnippet = await db.snippet.create({
        data: {
            title: formData.get('title') as string,
            body: formData.get('code') as string,
            languageId: languageId
        }
    })
    redirect(`/snippets/${newSnippet.id}`)
};

export default async function CreateSnippet () {
   
    const languages = await db.language.findMany();
    const renderLanguages = languages.map(language => {
        return <option key={language.id} value={language.id}>{language.name}</option>
    })

  
    return (
        <div className='container py-8'>
            <div className="w-96 mx-auto mt-20">
                <h1 className="bold text-2xl mb-3">
                    Create a snippet 
                </h1>
                <form action={createSnippet} method="POST" className='w-full'>
                    <div className="w-full mb-3">
                        <label htmlFor="title" className="semi-bold">Title</label>
                        <input type="text" id="title" name="title" className="rounded border w-full py-3 px-2" />
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="code" className="semi-bold">Code</label>
                        <textarea id="code" name="code" rows={5} className="rounded border w-full py-3 px-2"></textarea>
                        {/* <Editor id="code" /> */}
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="language" className="semi-bold">Language</label>
                        <select id="language" name="language" className="rounded border w-full py-3 px-2">
                            {renderLanguages}
                        </select>
                    </div>
                    <button type='submit'  className='rounded px-5 py-2 text-white  bg-lime-800'>Create</button>
                </form>
            </div>
        </div>
    )    
}