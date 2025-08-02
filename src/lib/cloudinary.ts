'use server';

import { v2 as cloudinary } from 'cloudinary';

if (
  !process.env.CLOUDINARY_CLOUD_NAME ||
  !process.env.CLOUDINARY_API_KEY ||
  !process.env.CLOUDINARY_API_SECRET
) {
  console.warn(
    'Cloudinary environment variables are not fully configured. Image uploads will not work.'
  );
} else {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        secure: true,
    });
}

export async function uploadSelfie(fileUri: string) {
    if (!process.env.CLOUDINARY_CLOUD_NAME) {
        throw new Error("Cloudinary is not configured.");
    }

    try {
        const result = await cloudinary.uploader.upload(fileUri, {
            folder: 'digital-akhuwat-selfies',
        });
        return result.secure_url;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw new Error('Failed to upload image.');
    }
}
