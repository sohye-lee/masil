import SnippetImage from 'public/bg-1.jpg';
import Hero from '@/components/hero';
import { db } from '@/db';
import Link from 'next/link';
import Container from '@/components/container';
import Snippet from '@/components/snippet';
import Button from '@/components/button';

export default async function Snippets() {
    const snippets = await db.snippet.findMany({
        include: {
            language: true
        }
    });
    const renderSnippets = snippets ? snippets.map(snippet => { 
        return <Snippet id={snippet.id} title={snippet.title} body={snippet.body} liked={snippet.liked || 0} language={snippet.language}  />
    }): <div><p className="text-slate-600">No snippet found.</p></div>;

    return (
        <div className='w-full'>
            <Hero 
                title="Snippets" 
                description='' 
                imgAlt='' 
                imgData={SnippetImage} 
            />
            <Container wide={false}>
                <div className="flex items-end mb-3 mt-8">
                    <Button button={false} text="Create New" mode="save" link="/snippets/new" />
                </div>
                {renderSnippets}
            </Container>
        </div>
    )
}