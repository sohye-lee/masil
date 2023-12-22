 'use client';
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import * as actions from '@/actions';
import { Language } from "@prisma/client";
 
export default  async function LanguageOptions () {
    const [myLanguageId, setMyLanguageId] = useState('');
    const [languages, setLanguages] = useState<Promise<Language[]>> ()

    let myLanguageName = "javascript";

    
    
    useEffect(() => {
        const dbLanguages: Promise<Language[]> = actions.getLanguages() || Array<Language>;
        if (dbLanguages) {
            setLanguages(dbLanguages);
        }
        actions.getLanguage(Number(myLanguageId)).then(res => {
            if (res) {
                myLanguageName = res.name;
            }
        });
       
    }, [])
    return (
        <div className="w-full mb-5 flex flex-col">
        <label htmlFor="language" className="semi-bold">Language</label>
        <select id="language" name="language" className="rounded border w-full py-3 px-2" onChange={e => setMyLanguageId((e.target as HTMLSelectElement).value)}>
            <option disabled selected>Select</option>
            { (await languages)?.map(language => {
               return <option key={language.id} value={language.id}>{language.name}</option>
            }) }
        </select>
    </div>
    )
}

 