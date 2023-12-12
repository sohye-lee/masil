import { notFound } from 'next/navigation';
import { db } from "@/db"

export default async function Question (props: any) {
    const question = await db.question.findFirst({
        where: {id: parseInt(props.params.id)}
    })

    const topic = await db.topic.findFirst({
        where: {id: question?.topicId}
    })

    if (!question) {
        return notFound();
    }
    return (
     <div className="  text-white bg-slate-900 h-screen py-8">
        <div className="w-96 mx-auto mt-8">

        <p className="font-sm text-slate-500">
        {topic?.name} | Question {question?.id} 
        </p>
        <h1 className="font-bold text-3xl">{question?.title}</h1>
        <p className="font-md text-white">{question?.description}</p>
        </div>
    </div>
 
    )
}