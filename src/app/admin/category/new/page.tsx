import Form from '@/components/form';
import { db } from '@/db';
import { redirect } from 'next/navigation';

export default async function CreateCategory() {
  return <></>;
  // const createCategory = async (formData: FormData) => {
  //     'use server';

  //     const parentId = formData.get('parent') != null ? formData.get('parent') : 0;
  //     const newCategory = await db.snippetCategory.create({
  //         data: {
  //             name: formData.get('name') as string,
  //             parent: parentId as number || 0
  //         }
  //     })
  //     redirect(`/admin/category/${newCategory.id}`) ;
  // }
  // // const categories =  await db.snippetCategory.findMany();
  // // const renderCategories = categories?   categories.map(category => {
  // //     return <option key={category.id} value={category.id}>{category.name}</option>
  // // }) : (<option value={0}>None</option>)
  // return (
  //     <Form title="Create a category"  >
  //          <form action={createCategory} method="POST" className='w-full'>
  //             <div className="w-full mb-3">
  //                 <label htmlFor="name" className="semi-bold text-white">Name</label>
  //                 <input type="text" id="name" name="name" className="rounded border w-full py-3 px-2" />
  //             </div>
  //             <div className="w-full mb-5 flex flex-col">
  //                 <label htmlFor="tag" className="semi-bold text-white">Parent Category</label>
  //                 <select className='py-3 px-2 rounded border'>
  //                     {/* {renderCategories} */}
  //                 </select>
  //             </div>
  //             <button type="submit" className={`rounded px-4 py-2 text-white bg-emerald-800`}>
  //                        Create
  //             </button>
  //         </form>
  //     </Form>
  // )
}
