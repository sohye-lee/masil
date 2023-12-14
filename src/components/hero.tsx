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
        <div className="relative w-full h-48 flex flex-col items-center justify-center overflow-hidden pt-12">
            <h1 className="text-3xl font-medium">
                {props.title}
            </h1>
            {props.description ? 
            <p className="mt-3 text-slate-600">
                {props.description}
            </p> : null
            }
            <div className='absolute -z-10 inset-0' >
                <Image 
                    src={props.imgData} 
                    alt={props.imgAlt}
                    fill 
                    style={{objectFit: 'cover'}}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-300" />
            </div>
    </div>
    )
}