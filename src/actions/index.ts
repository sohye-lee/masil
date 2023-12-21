'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';
// import { useFormState } from 'react-dom';

export const createSnippet =  async (formState:{ message: string},formData:FormData,   ) => {
    const title = formData.get('title');
    const code = formData.get('code');
    if (typeof title !== 'string' || title.length <= 3) {
        return {
            message: 'Title must be longer than 3 characters.'
        }
    }
    if (typeof code !== 'string' || code.length <= 10) {
        return {
            message: "Content must be longer than 10 characters"
        }
    }

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

export const getLanguages = async () => {
    let languages: any = [];
    const dbLanguages = await db.language.findMany();
    if (dbLanguages) {
        languages = dbLanguages;
    }

    return languages;
}

export const getLanguage = async (id:number) => {
    return await db.language.findUnique({
        where: {id}
    })
}
 
 

export const editSnippet = async (id: number, title: string, code: string) => {
    await db.snippet.update({
        where: {
            id, 
        },
        data: {
            title,
            body: code,
        }
    }),
    redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
    
    await db.snippet.delete({
        where: {
            id
        }
    })
    redirect('/snippets')
}