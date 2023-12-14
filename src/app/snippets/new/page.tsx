import {db} from '@/db';
import { redirect } from 'next/navigation';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import SnippetImage from 'public/bg-1.jpg';
import Container from '@/components/container';
import Hero from '@/components/hero';
import Button from '@/components/button';


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
        <div className='w-full'>
        <Hero 
            title="Snippets" 
            description='' 
            imgAlt='' 
            imgData={SnippetImage} 
        />
        <Container wide={false}>
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
                        {/* <FroalaEditorComponent /> */}
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="language" className="semi-bold">Language</label>
                        <select id="language" name="language" className="rounded border w-full py-3 px-2">
                            {renderLanguages}
                        </select>
                    </div>
                    <Button button={true} text={"Create"} mode="success" />
                </form>
        </Container>
    </div>

      
    )    
}