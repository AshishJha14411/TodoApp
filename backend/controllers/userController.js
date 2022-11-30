const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require( '../config/index')

exports.register = async (req, res) => {
  try {
    const { email, password, firstname, lastname } = req.body;
    if (!(email && password && firstname)) {
      res.status(401).send("Please Enter something in the fields");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(401).send("Email Address already has an account");
    }
    //hash(password, salt)
    const passEncrpt = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: passEncrpt,
    });
    //create a token
    const token = jwt.sign(
      {
        id: user._id,
        email,
      },
      config.JWT_SECRET,
      { expiresIn: "1h" }
    );
    user.token = token;
    user.password = undefined;
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    //collected information
    const { email, password } = req.body;
    console.log(process.env.SECRET_KEY)
    if (!(email && password)) {
      res.status(401).send("Email and Password is required");
    }
    //
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send("Invalid Credentials");
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id, email }, config.JWT_SECRET, {
        expiresIn: "3h",
      });
      user.password = undefined;
      user.token = token;
      
      const options = {
        expires: new Date(Date.now() +3* 24* 60 * 60 * 1000), httpOnly: true
      }
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
      })

      res.sendStatus(400).send("Email or password is is incorrect")

    }
  } catch (error) {
    res.send("SOME ERROR")
  }
};
