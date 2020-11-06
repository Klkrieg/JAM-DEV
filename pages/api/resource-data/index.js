import dbConnect from '../../../utils/dbConnect';
import Resource from '../../../models/resource';

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  switch (method) {
    case 'GET':
      try {
        const resource = await Resource.find(body);
        res.status(200).json({ success: true, data: resource });
      } catch (e) {
        res.status(400).json({ success: false });
      }
  }
};
