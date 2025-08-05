import mongoose from 'mongoose';
import reviewmodel from '../../model/reviewmodel';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.DB_URL);
  }

  const data = await reviewmodel.find({});
  res.status(200).json({ message: 'success', data });
}


