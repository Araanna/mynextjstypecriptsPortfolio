// /pages/api/cloudinary-gallery.ts (for Pages Router)

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder = '' } = req.query;

  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const API_KEY = process.env.CLOUDINARY_API_KEY;
  const API_SECRET = process.env.CLOUDINARY_API_SECRET;

  const expression = folder ? `folder:${folder}` : '';

  const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`, {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      expression,
      max_results: 30,
      sort_by: [{ created_at: 'desc' }],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return res.status(response.status).json({ error: data.error?.message || 'Failed to fetch' });
  }

  res.status(200).json(data);
}
