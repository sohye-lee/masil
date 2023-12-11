import Image from 'next/image';
import TalkImage from 'public/talks.jpg';

export default function TalksPage() {
    return <div>Talk Page
        <div className='absolute -z-10 inset-0'>
            <Image 
                src={TalkImage} 
                alt="life"
                fill 
                style={{objectFit: 'cover'}}
            />
        </div>
    </div>
}