import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
 
export async function Form() {
  async function uploadImage(formData: FormData) {
    'use server';
    const imageFile = formData.get('image') as File;
    await put(imageFile.name, imageFile, {
      access: 'public',
    });
    revalidatePath('/');
  }
 
  return (
    <form action={uploadImage} className="max-w-md mx-auto p-6 bg-slate-950 border-white rounded-lg shadow-lg">
      <div className="mb-4">
        <label 
          htmlFor="image" 
          className="block text-white text-sm font-bold mb-2"
        >
          Upload Image
        </label>
        <input 
          type="file" 
          id="image" 
          name="image" 
          required 
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-slate-900 file:text-white
            hover:file:bg-slate-950
            file:transition duration-500
            cursor-pointer
            border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold 
          py-2 px-4 rounded-md transition duration-500"
      >
        Upload
      </button>
    </form>
  );
}