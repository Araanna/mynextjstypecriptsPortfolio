// pages/api/cloudinary-gallery.ts (for Pages Router)
// If you are using App Router, this would be `app/api/cloudinary-gallery/route.ts` with different exports.

import { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary securely on the server-side
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, // OK to use NEXT_PUBLIC_ for cloud_name
  api_key: process.env.CLOUDINARY_API_KEY,      // Server-side only
  api_secret: process.env.CLOUDINARY_API_SECRET, // Server-side only
  secure: true
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // This search method is part of the Admin API and must run server-side
    const result = await cloudinary.search
      .expression('folder="Tech Communities" OR tags="tech_communities"') // Your search query
      .max_results(50)
      .execute();

    console.log("Server-side Cloudinary API Result:", result); // Logs in your terminal

    res.status(200).json(result);
  } catch (error: any) {
    console.error('Cloudinary API error in /api/cloudinary-gallery:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch images from Cloudinary API' });
  }
}