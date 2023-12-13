import Hero from '@/components/hero';
import TalkImage from 'public/talks.jpg';

export default function ResourcesPage() {
    return <div className='w-full'>
    <Hero 
        title="Resources" 
        description='Information from various resources' 
        imgAlt='' 
        imgData={TalkImage} 
    />
</div>
}