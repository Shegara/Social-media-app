const router = require("express").Router();
const User = require('../models/User')
const bcrypt = require ("bcrypt")

//REGISTER
router.post("/register", async (req,res)=>{
    try {
        //GENERATE PASSWORD
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        //CREATE USER
        const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        }) 

        //SAVE USER 
        const user = await newUser.save()
        res.status(200).json(user)
    } catch(err) {
        console.log(err)
    }
})

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router