'use client';
import { useFormState } from 'react-dom';
import Button from './button';
import Input from './input';
import LanguageOptions from './languageOptions';
import * as actions from '@/actions';

export default function TipCreateForm() {
  const [formState, action] = useFormState(actions.createTip, {
    message: '',
  });

  return (
    <div className="w-full py-8">
      <h1 className="bold text-2xl mb-3 mt-8">Create a Resource</h1>
      <form
        action={action}
        method="POST"
        className="w-full flex flex-col gap-3"
      >
        <Input label="Title" name="title" id="title" type="input" />
        <Input label="Link" name="link" id="link" type="textarea" rows={3} />
        <Input
          label="Note"
          name="comment"
          id="comment"
          type="textarea"
          rows={10}
        />
        <LanguageOptions />
        {formState.message && formState.message != '' ? (
          <div className="mb-4 rounded bg-orange-100 border border-orange-200 text-orange-700 py-1 px-2 text-xs ">
            {formState.message}
          </div>
        ) : null}
        <div className="flex items-center justify-end gap-3">
          <Button button={true} text={'Create'} mode="success" />
          <Button button={false} link="/tips" text={'Cancel'} mode="neutral" />
        </div>
      </form>
    </div>
  );
}
