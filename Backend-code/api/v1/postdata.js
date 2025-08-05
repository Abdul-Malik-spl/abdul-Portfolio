
import mongoose from 'mongoose';
import reviewmodel from '../../model/reviewmodel.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.DB_URL);
  }

  const newData = new reviewmodel(req.body);
  await newData.save();
  res.status(201).json({ message: 'Data saved', data: newData });
}
