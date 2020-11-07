import dbConnect from '../../server/database/dbConnect';

dbConnect();

export default async (req, res) => {
  res.json({ test: 'Db connected' });
};
