import React from "react";

interface ContainerProps {
    [key: string]: any;
    wide: boolean;
    children: React.ReactNode;
}

export default function Container(props:ContainerProps) {
    return (
    <div className="container mx-auto">
        <div className={`${props.wide? 'w-[1200px]' : 'w-[768px]'} max-w-[90vw] mx-auto`}>
            <div className="w-full  mx-auto py-16">
                {props.children}
            </div>
        </div>
    </div>
  )
}