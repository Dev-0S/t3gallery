import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'



// const mockUrls = [
//   "https://utfs.io/f/NfLxyFsanrmqNIW2VosanrmqkuDyLVfBIo9WhAF3jJzps8YZ",
//   "https://utfs.io/f/NfLxyFsanrmqqOZwnSRhel8MnrpJGoZcF1DPfYyKz4AHxXiQ",
//   "https://utfs.io/f/NfLxyFsanrmqXUY4cvzinj4zQuNVrpkfa3CFcHZxlYy9W0qo",
//   "https://utfs.io/f/NfLxyFsanrmqRRTiZ1NUX2j6qKtTh8LdEN1v30OxkJZ457As",
// ]

// const mockImages = mockUrls.map((url, index) => ({
//   id: index + 1,
//   url,
// }))


async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (images, { desc }) => [desc(images.id)]
  });
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div className="w-48 text-center" key={image.id}>{image.name} <img src={image.url}/> </div>
      ))}
    </div>
  );
}


export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="flex justify-center items-center text-2xl font-semibold text-center text-white">Sign In to view progress</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
