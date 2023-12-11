import type { StaticImageData } from "next/image";
import Image from 'next/image';

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
    description?: string;
}

export default function Hero(props: HeroProps) {
    return (
        <div className="relative w-full h-96 flex flex-col items-center justify-center overflow-hidden">
            <h1>
                {props.title}
            </h1>
            {props.description ? 
            <p>
                {props.description}
            </p> : null
            }
            <div className='absolute -z-10 inset-0'>
                <Image 
                    src={props.imgData} 
                    alt={props.imgAlt}
                    fill 
                    style={{objectFit: 'cover'}}
                />
            </div>
    </div>
    )
}