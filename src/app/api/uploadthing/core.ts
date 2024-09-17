import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { z } from 'zod'
import sharp from 'sharp'
import { db } from '@/db'

const f = createUploadthing()

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      // Middleware function to log incoming input
      console.log('Middleware input:', input);
      return { input }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { configId } = metadata.input

      let buffer;
      try {
        // Fetch the file from the URL
        const res = await fetch(file.url);
        if (!res.ok) throw new Error('Failed to fetch file');
        buffer = await res.arrayBuffer();
      } catch (error) {
        console.error('Error fetching the file:', error);
        return { error: 'Failed to fetch file' };
      }

      let imgMetadata;
      try {
        // Process the image using sharp
        imgMetadata = await sharp(buffer).metadata();
      } catch (error) {
        console.error('Error processing image with sharp:', error);
        return { error: 'Failed to process image' };
      }

      const { width, height } = imgMetadata;

      try {
        let configuration;
        // Perform database operation based on configId
        if (!configId) {
          configuration = await db.configuration.create({
            data: {
              imageUrl: file.url,
              height: height || 500,
              width: width || 500,
            },
          });
        } else {
          configuration = await db.configuration.update({
            where: {
              id: configId,
            },
            data: {
              croppedImageUrl: file.url,
            },
          });
        }

        // Log success and return configId
        console.log('Database operation successful:', configuration);
        return { configId: configuration.id };
      } catch (error) {
        console.error('Error updating database:', error);
        return { error: 'Database operation failed' };
      }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter