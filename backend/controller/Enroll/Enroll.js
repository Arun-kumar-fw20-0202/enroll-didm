const { enrollModal } = require("../../modal/Enroll/EnrollForm.modal");

const enrollForm = async (req, res) => {
  const payload = req.body;
  try {
    const data = await enrollModal(payload);
    await data.save();
    if (data) {
      res.send("api is still working").status(200);
    }
  } catch (err) {
    res.send(err.message).status(500);
  }
};

module.exports = { enrollForm };
