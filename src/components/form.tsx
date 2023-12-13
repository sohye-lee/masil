 

interface FormProps {
    title: string;
    children: React.ReactNode;

}

export default function FormLayout({title,children }:FormProps) {
    
    return (
        <div className='bg-stone-900 w-full h-screen'>
            <div className="container">
                <div className="w-96 mx-auto pt-12">
                    <h1 className="text-white text-2xl font-bold mb-5">
                        {title}
                    </h1>
                        {children}
                </div>
            </div>
        </div>
    )
}