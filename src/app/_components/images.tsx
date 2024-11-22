import { list } from '@vercel/blob';
import type { FC } from 'react';
import Image from 'next/image';
 
export async function Images() {
  async function allImages() {
    const blobs = await list();
    return blobs;
  }
  const images = await allImages();
 
  return (
    <section>
      {images.blobs.map((image) => (
        <Image
          priority
          key={image.url}
          src={image.url}
          alt="Image"
          width={200}
          height={200}
        />
      ))}
    </section>
  );
}