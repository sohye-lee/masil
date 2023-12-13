import Image from 'next/image';
import LifeImage from 'public/life.jpg';
import Hero from '@/components/hero';
import { db } from '@/db';
import Link from 'next/link';

export default async function Snippets() {
    const snippets = await db.snippet.findMany();
    const renderSnippets = snippets ? snippets.map(s => {
        return <Link href={`/snippets/${s.id}`} key={s.id}>
            <h1>{s.title}</h1>
        </Link>
    }): <div><p className="text-slate-600">No snippet found.</p></div>;

    return <div className='w-full'>
        <Hero 
            title="Snippets" 
            description='' 
            imgAlt='' 
            imgData={LifeImage} 
        />
         <div className="flex flex-col w-96 mx-auto py-12">
            {renderSnippets}
         </div>
    </div>
}