import { db } from "@/db";
import { redirect } from "next/navigation";
 



export default async function CreateQuestion() {
    const topics = await db.topic.findMany();
    const renderTopics = topics.map(topic => {
           return <option value={topic.id} key={topic.id} className="py-3">{topic.name}</option>
    })
    
    const askQuestion = async (formData: FormData) => {
        'use server';
        const topicId = parseInt(formData.get('topic') as string);
        const topic = await db.topic.findUnique({where: {id:topicId}});
    
        const question = await db.question.create({
            data: {
                title: formData.get('title') as string,
                description: formData.get('description') as string,
                topicId: Number(formData.get('topic')) as unknown as number,
            },
            include: {
                topic: {
                    select: {
                        name: true
                    }
                }
            }
            
        })
        redirect('/');
    }

 
    return (
        <div className="w-full bg-slate-800 h-screen">
        <div className="mx-auto w-96 px-4 py-12">
            <h3 className="font-bold mb-3 text-white mt-12">
                Post a question.
            </h3>
            <form action={askQuestion} method="POST">
                <div className="flex flex-col gap-4 mb-4">
                    <div className="flex flex-col  gap-3">
                        <label htmlFor="title" className="w-12 text-white">Title</label>
                        <input id="name" name="title" type="text" required className="border rounded p-2 w-full" />
                    </div>
                    <div className="flex flex-col  gap-3">
                        <label htmlFor="description" className="w-12 text-white">Description</label>
                        <textarea id="description" name="description" className="border rounded p-2 w-full"></textarea>
                    </div>
                    <div className="flex flex-col  gap-3">
                        <label htmlFor="topic" className="w-12 text-white">Topic</label>
                        <select name="topic" id="topic" className="py-3 px-2">
                            {renderTopics}
                        </select>
                    </div>
                    
                </div>
                <button type="submit" value="Save" className="rounded bg-slate-300 text-slate-900 px-3 py-2">Save</button>
            </form>
        </div>
    </div>
    )
}