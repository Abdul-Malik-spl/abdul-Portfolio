import mongoose from 'mongoose';
import reviewmodel from '../model/reviewmodel.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.DB_URL);
    }

    const value = await reviewmodel.find({});
    res.status(200).json({ message: 'success', data: value });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
