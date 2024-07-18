const bcrypt = require('bcryptjs');

async function userSigninController (req, res) {
    try {
        const [ email, password ] = req.body;

        if (!email) {
            throw new Error("Please provide an email.");
          }
          if (!password) {
            throw new Error("Please provide a password.");
          }

          const user = await userModel.findOne({email});

          if(!user) {
            throw new Error("User not found!");
          }

          const checkPassowrd = bcrypt.compare(password, user.password);

          console.log("checkpassword", password)

    } catch (error) {
        res.status(400).json({
            message: err.message || err ,
            error: true,
            success: false,
          });
    }
}

module.exports = userSigninController;
