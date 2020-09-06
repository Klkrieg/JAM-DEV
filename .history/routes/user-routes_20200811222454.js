const router = require("express").Router();
const Users = require("../models/users.js");
const bcrypt = require('bcrypt');

async function hashPassword() {
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
}

router.post("/api/users", async ({ body }, res) => {
    Users.find({email: body.email})
        .exec()
        .then(user=> {
            if(user) {
                return res.status(409).json({
                    message: "Email is in use."
                });
            } else {
                hashPassword();
            }
   
});

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

module.exports = router;

