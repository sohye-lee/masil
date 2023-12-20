'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';
import { confirmAlert } from 'react-confirm-alert';

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