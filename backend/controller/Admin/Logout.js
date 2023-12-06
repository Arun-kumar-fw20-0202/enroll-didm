//
//
//
//
//

const userLogoutController = async (req, res) => {
  try {
    // console.dir(req, "token");
    console.log(req.cookies);

    if (req.cookies.auth_token) {
      res.clearCookie("auth_token");
      res.status(200).send({ message: "Logout successfully", status: true });
    } else {
      res.send("No cookie found. You are already logged out.");
    }
  } catch (error) {
    res.status(400).send({ message: error.message, status: false });
  }
};

module.exports = { userLogoutController };
