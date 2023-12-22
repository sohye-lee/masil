'use client';
import { useFormState } from "react-dom";
import Button from "./button";
import Input from "./input";
import LanguageOptions from "./languageOptions";
import * as actions from '@/actions';

export default function ResourceCreateForm() {
    const [formState, action] = useFormState(actions.createResource,{message: ""});

    return (
        <div className="w-full py-8">
            <form action={action} method="POST" className="w-full flex flex-col gap-3">
                <Input label="Title" name="title" id="title" type="input" inputType="text" />
                <Input label="Link" name="link" id="link" type="textarea" rows={3} />
                {/* <LanguageOptions /> */}
                {formState.message && formState.message != ""? 
                    <div className="mb-4 rounded bg-orange-100 border border-orange-200 text-orange-700 py-1 px-2 text-xs ">
                        {formState.message}
                    </div>: null
                }
               <div className="flex items-center">
                        <Button button={true} text={"Create"} mode="success" />
                        <Button button={false} link="/snippets" text={"Cancel"} mode="neutral" addClass="ml-3"  />
                </div>
            </form>
        </div>
    )
}