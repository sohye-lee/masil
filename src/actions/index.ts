'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';
// import { useFormState } from 'react-dom';

export const createSnippet = async (
  formState: { message: string },
  formData: FormData
) => {
  try {
    const title = formData.get('title');
    const code = formData.get('code');
    if (typeof title !== 'string' || title.length <= 3) {
      return {
        message: 'Title must be longer than 3 characters.',
      };
    }
    if (typeof code !== 'string' || code.length <= 10) {
      return {
        message: 'Content must be longer than 10 characters',
      };
    }

    const languageId = Number(formData.get('language')) || 0;
    const newSnippet = await db.snippet.create({
      data: {
        title: formData.get('title') as string,
        body: formData.get('code') as string,
        languageId: languageId,
      },
    });

 
    redirect(`/snippets/${newSnippet.id}`);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: 'Something went wrong...',
      };
    }
  }
};

export const getLanguages = async () => {
  let languages: any = [];
  const dbLanguages = await db.language.findMany();
  if (dbLanguages) {
    languages = dbLanguages;
  }

  return languages;
};

export const editSnippet = async (id: number, title: string, code: string) => {
  await db.snippet.update({
    where: {
      id,
    },
    data: {
      title,
      body: code,
    },
  }),
    redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: {
      id,
    },
  });
  redirect('/snippets');
};

// TIPS

export const createTip = async (
  formState: { message: string },
  formData: FormData
) => {
  try {
    const title = formData.get('title');
    const link = formData.get('link');
    const comment = formData.get('comment');
    if (!title || typeof title !== 'string' || title.length < 4) {
      return {
        message: 'Title must be longer than 3 characters.',
      };
    }
    if (!link || typeof link !== 'string' || link.length < 11) {
      return {
        message: 'Link must be longer than 10 characters.',
      };
    }
    const languageId = Number(formData.get('language')) || 0;
    const newTip = await db.tip.create({
      data: {
        title: formData.get('title') as string,
        link: formData.get('link') as string,
        comment: formData.get('comment') as string,
        languageId: languageId,
      },
    });
    if (newTip) {
      console.log('========== success! ==========');
    }
    console.log('db tip : ', newTip);
    return {
      message: 'success!',
    };
    // redirect(`/tips/${newTip.id}`);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: 'Something went wrong...',
      };
    }
  }
};

export const getTip = async (id: number) => {
  return await db.tip.findUnique({
    where: {
      id,
    },
    include: {
      language: true,
    },
  });
};

export const deleteTip = async (id: number) => {
  await db.tip.delete({
    where: {
      id,
    },
  });
  redirect('/tips');
};
