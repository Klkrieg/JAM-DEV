const router = require("express").Router();
const Users = require("../models/users.js");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");



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

        if(user == null){
            return res.status(400).send("Cannot Find User");
        }
        try{
            if(await bcrypt.compare(req.body.password, user[0].password)){
                res.status(200).send("success");
                console.log("success");
                jwt.sign({user: user}, 'secretkey', { expiresIn: '30s'}, (err, token) => {
                    res.json({
                        token: token
                    });
                });
            }else{
                res.status(400).send("You Shall Not Password");
            }
        }catch{
            res.status(500).send();
        }
    });
    
});

router.get("/api/users", (req, res)=> {
    Users.findOne({}, (err, data)=> {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
}) 


module.exports = router;

// router.post("/api/users/login", (req, res) => {
//   Users.find({ email: req.body.email }, "email password", async (err, user) => {
//     if (err) return handleError(err);
//     console.log(req.body.password);
//     console.log(user[0].password);
//     console.log(res);
//     if (user == null) {
//       return res.status(400).send("Cannot Find User");
//     }
//     try {
//       if (await bcrypt.compare(req.body.password, user[0].password)) {
//         res.status(200).send("success");
//         console.log("success");
//       } else {
//         res.status(400).send("You Shall Not Password");
//       }
//     } catch {
//       res.status(500).send();
//     }
//   });
// });