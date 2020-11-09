import bcrypt from 'bcrypt';

import dbConnect from '../../../server/database/dbConnect';
import Users from '../../../server/models/users';

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const users = await Users.find({});
        res.status(200).json({ success: true, data: users });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      // Users.create(req.body, (err, user) => {
      // 	if (err) {
      // 		return res.status(400).json(err);
      // 	} else {
      // 		return res.status(200).json({ success: true, user });
      // 	}
      // });
      Users.find({ email: req.body.email }, 'email', async (err, user) => {
        try {
          if (user) {
            console.log('A user with that email already exists.');
            res.status(409).send();
          } else if (!user) {
            const salt = await bcrypt.genSalt();
            const hashedPass = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashedPass;
            Users.create(req.body, (err, user) => {
              if (err) {
                return res.status(400).json(err);
              } else {
                return res.status(200).json({ success: true, user });
              }
            });
          }
        } catch (e) {
          res.send(err);
        }
      });
      break;
    default:
      res.status(400).json({ succes: false });
  }
};

// router.post("/api/users", (req, res) => {
// 	Users.findOne({ email: req.body.email }, "email", async (err, user) => {
// 		try {
// 			if (user) {
// 				console.log("A user with that email already exists.");
// 				res.status(409).send();
// 			} else if (!user) {
// 				const salt = await bcrypt.genSalt();
// 				const hashedPass = await bcrypt.hash(req.body.password, salt);
// 				req.body.password = hashedPass;
// 				Users.create(body)
// 					.then((dbUsers) => {
// 						res.json(dbUsers);
// 					})
// 					.catch((err) => {
// 						console.log(err);
// 						res.status(400).json(err);
// 					});
// 			}
// 		} catch {
// 			res.send(err);
// 		}
// 	});
// });
