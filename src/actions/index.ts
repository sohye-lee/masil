'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';
import { useFormState } from 'react-dom';

export const createSnippet =  async (formState:{ message: string}, formData:FormData) => {
    return {
        message: 'Title must be longer.'
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