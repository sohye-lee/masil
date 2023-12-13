import { db } from "@/db"

export default async function SnippetPage(props:any) {
    const snippet = await db.snippet.findUnique({
        where: {
            id: parseInt(props.params.id)
        },
        include: {
            language: true
        }
    })
    return (
        <div className="text-white bg-slate-900 h-screen py-12">
            <div className="w-96 mx-auto mt-8">
                <p className="font-sm text-slate-500">
                    {snippet?.language.name} | Question {snippet?.id} 
                </p>
                <h1 className="font-semibold text-2xl">
                    {snippet?.title}
                </h1>
                <div className="font-md text-white mt-3 py-3 px-4 rounded bg-stone-700 border">
                    <code>

                    {snippet?.body}
                    </code>
                </div>
            </div>
        </div>
    )
}