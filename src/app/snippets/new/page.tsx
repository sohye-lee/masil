'use client';
 
import SnippetImage from 'public/bg-1.jpg';
import Container from '@/components/container';
import Hero from '@/components/hero';
import SnippetCreateForm from '@/components/snippet-create-form';

 
export default async function CreateSnippet () {
 
    return (
        <div className='w-full'>
            <Hero 
                title="Snippets" 
                description='' 
                imgAlt='' 
                imgData={SnippetImage} 
            />
            <Container wide={false}>
                <SnippetCreateForm />
            </Container>
        </div>
    )    
}
 
