'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';
// import { useFormState } from 'react-dom';

export const createSnippet =  async (formState:{ message: string},formData:FormData) => {
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


// RESOURCES

export const createResource = async (formState:{ message: string},formData:FormData) => {
    const title = formData.get('title');
    const link = formData.get('link');
    if (!title || typeof (title) !== 'string' || title.length < 4) {
        return {
            message: 'Title must be longer than 3 characters.'
        }
    }
    if (!link || typeof (link) !== 'string' || link.length < 11) {
        return {
            message: 'Link must be longer than 10 characters.'
        }
    }
    const languageId = Number(formData.get('language')) || 0;
    const newResource = await db.resource.create({
        data: {
            title: title as string,
            link: link as string,
            languageId: languageId
        }
    });

    redirect(`/resources/${newResource.id}`)
}

export const getResource = async (id: number) => {
    return await db.resource.findUnique({
        where: {
            id,
        }, 
        include: {
            language: true
        }
    })
}

export const deleteResource = async (id: number) => {
    await db.resource.delete({
        where: {
            id,
        }
    })
    redirect('/resorces');
}