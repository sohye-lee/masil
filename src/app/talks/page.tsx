import Hero from '@/components/hero';
import Image from 'next/image';
import TalkImage from 'public/talks.jpg';

export default function TalksPage() {
    return <div className='w-full'>
    <Hero 
        title="Talk about Life" 
        description='here is the place' 
        imgAlt='' 
        imgData={TalkImage} 
    />
</div>
}