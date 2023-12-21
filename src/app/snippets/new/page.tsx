'use client';
 
import SnippetImage from 'public/bg-1.jpg';
import Container from '@/components/container';
import Hero from '@/components/hero';
import Button from '@/components/button';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import LanguageOptions, { renderLanguages } from '@/components/languageOptions';
import { useEffect, useState } from 'react';
import { Language } from '@prisma/client';
import SnippetCreateForm from '@/components/snippet-create-form';

 
export default async function CreateSnippet () {
    const [formState, action] = useFormState(actions.createSnippet,{message: ""});
    const [languages, setLanguages] = useState<Promise<Language[]>> ()
 
    useEffect(() => {
        const dbLanguages: Promise<Language[]> = actions.getLanguages() || Array<Language>;
        if (dbLanguages) {
            setLanguages(dbLanguages);
        }
    }, [])
 
    return (
        <div className='w-full'>
            <Hero 
                title="Snippets" 
                description='' 
                imgAlt='' 
                imgData={SnippetImage} 
            />
            <Container wide={false}>
                <SnippetCreateForm />
                {/* <h1 className="bold text-2xl mb-3 mt-8">
                        Create a snippet 
                </h1>
                <form action={action} method="POST" className='w-full'>
                    <div className="w-full mb-3">
                        <label htmlFor="title" className="semi-bold">Title</label>
                        <input type="text" id="title" name="title" className="rounded border w-full py-3 px-2" />
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="code" className="semi-bold">Code</label>
                        <textarea id="code" name="code" rows={5} className="rounded border w-full py-3 px-2"></textarea>
                    </div>
                    <div className="w-full mb-5 flex flex-col">
                        <label htmlFor="language" className="semi-bold">Language</label>
                        <select id="language" name="language" className="rounded border w-full py-3 px-2">

                            <option disabled selected>Select</option>
                            { (await languages)?.map(language => {
                               return <option value={language.id}>{language.name}</option>
                            }) }
                        </select>
                    </div>
                    <div>
                        {formState.message}
                    </div>
                    <div className="flex items-center">
                        <Button button={true} text={"Create"} mode="success" />
                        <Button button={false} link="/snippets" text={"Cancel"} mode="neutral" addClass="ml-3"  />
                    </div>
                </form> */}
            </Container>
        </div>
    )    
}
 
