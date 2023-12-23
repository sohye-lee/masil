// 'use server';
// import Container from '@/components/container';
// import Hero from '@/components/hero';
// import TipCreateForm from '@/components/tip-create-form';
// import ResourceImage from 'public/bg-1.jpg';

// export default function CreateResource() {
//   return (
//     <div className="w-full">
//       <Hero
//         title="Upload Useful Information"
//         imgAlt=""
//         imgData={ResourceImage}
//         description=""
//       />
//       <Container wide={false}>
//         <TipCreateForm />
//       </Container>
//     </div>
//   );
// }

import Button from '@/components/button';
import Container from '@/components/container';
import Hero from '@/components/hero';
import Input from '@/components/input';
import { db } from '@/db';
import { isRedirectError } from 'next/dist/client/components/redirect';
import { RedirectType, redirect } from 'next/navigation';
import TipImage from 'public/bg-1.jpg';

export default async function CreateTip() {
  const languages = await db.language.findMany();
  const renderLanguages = languages.map((language) => {
    return (
      <option value={language.id} key={language.id} className="py-3">
        {language.name}
      </option>
    );
  });

  const addTip = async (formData: FormData) => {
    'use server';
    let newTipId;
    try {
      const languageId = parseInt(formData.get('language') as string);
      const language = await db.language.findUnique({
        where: { id: languageId },
      });

      const newTip = await db.tip.create({
        data: {
          title: formData.get('title') as string,
          link: formData.get('link') as string,
          comment: formData.get('comment') as string,
          languageId: languageId,
        },
      });
      newTipId = newTip.id;
    } catch (err: unknown) {
      let message = 'Something went wrong';
      if (isRedirectError(err)) throw err;
      console.log(err);

      if (err instanceof Error) {
        message = err.message;
      }
    }
    redirect(`/tips`);
  };

  return (
    <div className="w-full">
      <Hero
        title="Upload Useful Information"
        imgAlt=""
        imgData={TipImage}
        description=""
      />
      <Container wide={false}>
        {/* <h3 className="text-2xl mb-3">Add Tip</h3> */}
        <form action={addTip} method="POST">
          <div className="flex flex-col gap-3 mb-4">
            {/* <Input
              id="title"
              type="input"
              inputType="text"
              label="Title"
              name="title "
            />
            <Input
              id="link"
              type="input"
              inputType="text"
              label="Link"
              name="link "
            />
            <Input
              id="comment"
              type="textarea"
              label="Comment"
              name="comment "
            /> */}
            <div className="w-full">
              <label htmlFor="title" className="semi-bold">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="rounded border w-full py-3 px-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="link" className="semi-bold">
                Link
              </label>
              <textarea
                id="link"
                name="link"
                className="rounded border w-full py-3 px-2"
              ></textarea>
            </div>
            <div className="w-full">
              <label htmlFor="comment" className="semi-bold">
                Note
              </label>
              <textarea
                id="comment"
                name="comment"
                className="rounded border w-full py-3 px-2"
              ></textarea>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="language" className=" ">
                Language
              </label>
              <select
                name="language"
                id="language"
                className="rounded border w-full py-3 px-2"
              >
                {renderLanguages}
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button text="Create" mode="success" button={true} value="save" />
            {/*     
          <button
            type="submit"
            value="Save"
            className="rounded bg-slate-300 text-slate-900 px-3 py-2"
            >
            Save
          </button> */}
          </div>
        </form>
      </Container>
    </div>

    // <div className="w-full bg-slate-800 h-screen">
    //   <div className="mx-auto w-96 px-4 py-12">
    //     <h3 className="font-bold mb-3 text-white mt-12">Post a question.</h3>
    //     <form action={addTip} method="POST">
    //       <div className="flex flex-col gap-4 mb-4">
    //         <div className="flex flex-col  gap-3">
    //           <label htmlFor="title" className="w-12 text-white">
    //             Title
    //           </label>
    //           <input
    //             id="name"
    //             name="title"
    //             type="text"
    //             required
    //             className="border rounded p-2 w-full"
    //           />
    //         </div>
    //         <div className="flex flex-col  gap-3">
    //           <label htmlFor="link" className="w-12 text-white">
    //             Link
    //           </label>
    //           <textarea
    //             id="link"
    //             name="link"
    //             className="border rounded p-2 w-full"
    //           ></textarea>
    //         </div>
    //         <div className="flex flex-col  gap-3">
    //           <label htmlFor="comment" className="w-12 text-white">
    //             Note
    //           </label>
    //           <textarea
    //             id="comment"
    //             name="comment"
    //             className="border rounded p-2 w-full"
    //           ></textarea>
    //         </div>
    //         <div className="flex flex-col  gap-3">
    //           <label htmlFor="language" className="w-12 text-white">
    //             Language
    //           </label>
    //           <select name="language" id="language" className="py-3 px-2">
    //             {renderLanguages}
    //           </select>
    //         </div>
    //       </div>

    //       <button
    //         type="submit"
    //         value="Save"
    //         className="rounded bg-slate-300 text-slate-900 px-3 py-2"
    //       >
    //         Save
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}
