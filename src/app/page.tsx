import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/NfLxyFsanrmqNIW2VosanrmqkuDyLVfBIo9WhAF3jJzps8YZ",
  "https://utfs.io/f/NfLxyFsanrmqqOZwnSRhel8MnrpJGoZcF1DPfYyKz4AHxXiQ",
  "https://utfs.io/f/NfLxyFsanrmqXUY4cvzinj4zQuNVrpkfa3CFcHZxlYy9W0qo",
  "https://utfs.io/f/NfLxyFsanrmqRRTiZ1NUX2j6qKtTh8LdEN1v30OxkJZ457As",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts)
  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4">
        {posts.map((post) => (
          <div className="" key={post.id}>{post.name} test</div>
        ))}

        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
