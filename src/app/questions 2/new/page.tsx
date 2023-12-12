import { db } from '@/db';
import { redirect } from 'next/navigation';

export default function QuestionCreatePagae() {
    async function createTopic(formData: FormData) {
        'use server';
        const name = formData.get('name') as string;
        const topic = await db.topic.create({
            data: {
                name 
            }
        })
        console.log(topic);
        redirect('/');
    }

    return (
    <div className="w-full bg-slate-800 h-screen">
        <div className="mx-auto w-96 px-4 py-12">
            <h3 className="font-bold mb-3 text-white mt-12">
                Create a new topic.
            </h3>
            <form action={createTopic} method="POST">
                <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        <label htmlFor="name" className="w-12 text-white">Name</label>
                        <input id="name" name="name" type="text" required className="border rounded p-2 w-full" />
                    </div>
                </div>
                <button type="submit" value="Save" className="rounded bg-slate-300 text-slate-900 px-3 py-2">Save</button>
            </form>
        </div>
    </div>
    )
}