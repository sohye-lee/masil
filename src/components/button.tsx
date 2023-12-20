import { deleteSnippet } from '@/actions';
import Link from 'next/link';

interface ButtonProps {
  button: boolean;
  text: string;
  mode: 'danger' | 'success' | 'save' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  addClass?: string;
  loading?: boolean;
  link?: string;
  deleteId?: number;
  deleteType?: 'snippets' | 'questions' | 'resources';
  [key: string]: any;
}

export default function Button({
  button,
  text,
  mode,
  size,
  addClass,
  loading,
  link,
  onclick,
  deleteId,
  deleteType,
  ...rest
}: ButtonProps) {
  
  let btnSize = '';
  switch (size) {
    case 'large':
      btnSize = 'px-8 py-3 text-lg';
      break;
    case 'small':
      btnSize = 'px-2 py-1 text-sm';
      break;
    case 'medium':
      btnSize = 'px-5 py-2 text-md';
      break;
    default:
      btnSize = 'px-5 py-2 text-md';
  }

  let btnMode = '';
  switch (mode) {
    case 'danger':
      btnMode = 'bg-red-400 hover:bg-red-300';
      break;
    case 'success':
      btnMode = 'bg-blue-400 hover:bg-blue-300';
      break;
    case 'save':
      btnMode = 'bg-emerald-400 hover:bg-emerald-300';
      break;
    case 'neutral':
      btnMode = 'bg-slate-100 hover:bg-slate-200';
      break;
    default:
      btnMode = 'bg-emerald-400 hover:bg-emerald-300';
  }

  return (
    <>
    {
        button ? 
        <button type="submit"  className={`rounded-md  border border-slate-800 border-r-2  border-b-2 hover:border  ${btnMode} ${btnSize} ${addClass}`} {...rest}>{text}</button>:
        <Link href={link || '/'} className={`rounded-md  border border-slate-800 border-r-2  border-b-2 hover:border  ${btnMode} ${btnSize} ${addClass}`} {...rest}>{text}</Link>
    }
    </>
  );
}
 
