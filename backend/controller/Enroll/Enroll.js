const { enrollModal } = require("../../modal/Enroll/EnrollForm.modal");

const enrollForm = async (req, res) => {
  const payload = req.body;
  //   console.log(payload);
  try {
    const find = await enrollModal.findOne({ $or: [{ phone_number: payload.phone_number }, { email: payload.email }] });
    console.log(find);
    if (find) {
      if (find.phone_number == payload.phone_number) {
        return res.status(403).send({ msg: "Phone Number is alredy exist " });
      } else if (find.email == payload.email) {
        return res.status(403).send({ msg: "Email is alredy exist " });
      }
    } else {
      const data = await enrollModal(payload);
      await data.save();
      return res.status(200).send({ msg: "data saved", data });
    }
  } catch (err) {
    res.send(err.message).status(500);
  }
};

module.exports = { enrollForm };
