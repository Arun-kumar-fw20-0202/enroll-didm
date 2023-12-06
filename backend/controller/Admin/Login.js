const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const adminModal = require("../../modal/Admin/admin.modal");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).send({ message: "Requirements not fulfilled", status: false });
    }
    const emailFinder = await adminModal.findOne({ email: email });
    if (email) {
      // compare
      let ans = await bcryptjs.compare(password, emailFinder.password);
      if (ans) {
        let { password, ...userWithoutPassword } = emailFinder.toObject();
        let token = jwt.sign(
          {
            id: emailFinder._id,
            name: emailFinder.name,
            email: emailFinder.email,
          },
          process.env.SECRET_KEY
        );
        const cookieOptions = {
          maxAge: 172800000,
        };
        return res.cookie("auth_token", token, cookieOptions).json({
          success: true,
          message: "Login success",
          profile: userWithoutPassword,
        });
      } else {
        return res.status(200).send({ message: "Incorrect password", status: false });
      }
    }
    return res.status(400).send({ message: "No user found with provided email", status: false });
  } catch (error) {
    return res.status(400).send({ message: error.message, status: false });
  }
};

module.exports = loginController;
