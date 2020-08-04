const router = require("express").Router();
const Users = require("../models/users.js");
const bcrypt = require('bcrypt');

router.post("/api/users", async ({ body }, res) => {
    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(body.password, salt);
    body.password = hashedPass;
    Users.create(body)
        .then((dbUsers) => {
            res.json(dbUsers);
            console.log(res.body);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);  
        });

// {
//     email: 'klkrieg3@gmail.com',
//     password: '$2b$10$Y.Y7BZUkyE6ou89M7cCms.qfTA.PwFJfxKtA4JtiXiwNKi1x3YKou',
//     firstName: 'Karson',
//     lastName: 'Krieg',
//     birthday: '1995-03-12',
//     phoneNumber: '5209822388',
//     profileType: 'individual'
//   }
});

//user => user.email === req.body.email

router.post("/api/users/login", (req, res) =>{
   Users.find({"email": req.body.email}, "email password", async (err, user)=>{
        if (err) return handleError(err);
        console.log(req.body.password);
        console.log(user[0].password);
        if(user == null){
            return res.status(400).send("Cannot Find User");
        }
        try{
            if(await bcrypt.compare(req.body.password, user[0].password)){
                res.status(200).send("success");
                console.log("success");
            }else{
                res.status(400).send("You Shall Not Password");
            }
        }catch{
            res.status(500).send();
        }
    });
    
});

router.get("/api/users", (req, res)=> {
    Users.find({}, (err, data)=> {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
}) 


module.exports = router;

///////////////example this is using router from express required above
// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then((dbTransaction) => {
//       res.json(dbTransaction);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then((dbTransaction) => {
//       res.json(dbTransaction);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then((dbTransaction) => {
//       res.json(dbTransaction);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

///////////example- this was setup in the server using app = express() 

// app.post("/submit", (req, res) => {
//   console.log(req.body);

//   db.notes.insert(req.body, (error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(data);
//     }
//   });
// });

// app.get("/all", (req, res) => {
//   db.notes.find({}, (error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// app.get("/find/:id", (req, res) => {
//   db.notes.findOne(
//     {
//       _id: mongojs.ObjectId(req.params.id),
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

// app.post("/update/:id", (req, res) => {
//   db.notes.update(
//     {
//       _id: mongojs.ObjectId(req.params.id),
//     },
//     {
//       $set: {
//         title: req.body.title,
//         note: req.body.note,
//         modified: Date.now(),
//       },
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   db.notes.remove(
//     {
//       _id: mongojs.ObjectID(req.params.id),
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

// app.delete("/clearall", (req, res) => {
//   db.notes.remove({}, (error, response) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(response);
//     }
//   });
// });
