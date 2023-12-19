import Container from "@/components/container"
import Hero from "@/components/hero";
import { db } from "@/db"
import SnippetImage from 'public/bg-1.jpg';
import { Copy } from 'react-feather';
import { copyText } from "@/util";


export default async function SnippetPage(props:any) {
    'use server';
    const snippet = await db.snippet.findUnique({
        where: {
            id: parseInt(props.params.id)
        },
        include: {
            language: true
        }
    })
    return (
        <div className="w-full">
            <Hero title={snippet?.title || "Snippet"} description="" imgAlt="" imgData={SnippetImage} />
            <Container wide={false}>
                <p className="font-sm text-slate-500">
                    {snippet?.language.name} | Question {snippet?.id} 
                </p>
                <h1 className="font-semibold text-2xl">
                    {snippet?.title}
                </h1>
                <div id="copyContent" className="relative font-md text-white mt-3 py-3 px-4 rounded bg-stone-700 border">
                    <pre>
                        <code >
                            {snippet?.body}
                        </code>
                    </pre>
                    <button onClick={copyText} id="copyBtn" className="absolute bottom-3 right-3 outline-none flex align-items gap-3">
                      <div id="copyResult" className="hidden border-1 border-stone-400 bg-stone-600 rounded-sm py-1 px-2 text-xs text-white">
                      </div>
                      <Copy color="#fff" width="20" />
                    </button>
                </div>
            </Container>
        </div>
    
    )
}
