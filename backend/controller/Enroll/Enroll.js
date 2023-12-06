const { generateDiscount } = require("../../core/GenerateDiscount");
const { enrollModal } = require("../../modal/Enroll/EnrollForm.modal");

const enrollForm = async (req, res) => {
  const discount = generateDiscount();
  const payload = { ...req.body, discount: discount };
  console.log(payload);
  try {
    const find = await enrollModal.findOne({ $or: [{ phone_number: payload.phone_number }, { email: payload.email }] });
    console.log(find);
    if (find) {
      //
      const data = await enrollModal.findByIdAndUpdate({ _id: find._id }, { ...payload, discount: find?.discount }, { new: true });
      res.status(200).send({ message: "Your Data Already Exist, Fields Updated", status: true, data: data });
    }
    //
    else {
      const data = await enrollModal(payload);
      await data.save();
      return res.status(200).send({ status: true, message: "data saved", data: data });
    }
  } catch (err) {
    res.send({ status: false, message: err.message }).status(500);
  }
};

const updateForm = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    const data = await enrollModal.findByIdAndUpdate(id, payload, { new: true });
    if (data) {
      res.status(200).send({ status: true, message: "Data Updated", data: data });
    } else {
      res.status(404).send({ message: "Data not found", status: false });
    }
  } catch (err) {
    res.send({ status: false, message: err.message }).status(500);
  }
};
const getFormData = async (req, res) => {
  const { page, limit = 1 } = req.query;
  try {
    // Perform the find operation with filtering and pagination
    const total = await enrollModal.find();
    const data = await enrollModal.find();
    // .skip((page - 1) * limit)
    // .limit(parseInt(limit));

    res.send({ message: "Data Fetched", status: true, data: data, total: total.length });
  } catch (err) {
    res.send({ message: err.message, status: false });
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await enrollModal.findByIdAndDelete(id);
    res.send({ message: "Data Deleted", status: true });
  } catch (err) {
    res.send({ message: err.message, status: false });
  }
};

module.exports = { enrollForm, updateForm, getFormData, deleteData };
