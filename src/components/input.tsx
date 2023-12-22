interface inputProps {
    label: string;
    id: string;
    name: string;
    type: 'input' | 'textarea';
    inputType?: 'text' | "email" | "search" | "tel";
    rows?: number;
}


export default function Input ({label,id,name,type = 'input', inputType = 'text', rows}: inputProps) {
    const renderInput = (type: string) => {
        switch(type) {
            case 'input':
                    return <input
                    type={inputType}
                    id={id}
                    name={name}
                    className="rounded border w-full py-3 px-2"
                />
            case 'textarea':
                return <textarea
                id={id}
                name={name}
                className="rounded border w-full py-3 px-2"
                rows={rows}
            >
            </textarea>
            default:
                return <input
                type={inputType}
                id={id}
                name={name}
                className="rounded border w-full py-3 px-2"
                />
        }
    } 

    return (
        <div className="w-full mb-3">
            <label htmlFor={name} className="semi-bold">
                {label}
            </label>
            {renderInput(type)}
        </div>
    )
}