const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const { connection } = require("./config/config");
const allRoutes = require("./routes/AllRoutes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Razorpay = require("razorpay");
const shortid = require("shortid");
const { enrollModal } = require("./modal/Enroll/EnrollForm.modal");
const cookieParser = require("cookie-parser");
// app.use(cors());

app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api", allRoutes);

const razorpay = new Razorpay({
  key_id: process.env.keyId,
  key_secret: process.env.KeySecret,
});

app.post("/checkpayment", async (req, res) => {
  try {
    const { userId } = req.body;
    const preObjFinder = await enrollModal.findOne({ _id: userId });
    if (preObjFinder.paymentStatus) {
      return res.status(400).send({ message: "You already purchased the course", status: false });
    }
    return res.status(200).send({ message: "go ahead", status: true });
  } catch (error) {
    return res.status(400).send({ message: error.message, status: false });
  }
});

app.post("/order", async (req, res) => {
  const { amount, currency, userId } = req.body;
  const options = {
    amount: amount * 100, // Razorpay expects the amount in paise
    currency,
    receipt: shortid.generate(),
  };
  try {
    // const preObjFinder = await enrollModal.findOne({ _id: userId });
    // if (preObjFinder.paymentStatus) {
    //   return res
    //     .status(400)
    //     .send({ message: "You already purchased the course" });
    // }
    const order = await razorpay.orders.create(options);
    res.status(200).json({ message: "Payment done successfully", data: order });
  } catch (error) {
    return res.status(400).send({ message: error.message, status: false });
  }
});

app.post("/payment", async (req, res) => {
  try {
    console.log("req.body=>", req.body);
    const { userId, paid_amount, course_amount, paymentId } = req.body;
    const preObjFinder = await enrollModal.findOne({ _id: userId });
    if (preObjFinder.paymentStatus) {
      return res.status(400).send({ message: "You already purchased the course" });
    }
    const updateEnroll = await enrollModal.findByIdAndUpdate(
      { _id: userId },
      {
        paid_amount: paid_amount / 100,
        course_amount: course_amount,
        paymentStatus: true,
        paymentId: paymentId,
      },
      {
        new: true,
      }
    );
    res.status(200).send({ message: "Payment done successfully", data: updateEnroll });
  } catch (error) {
    return res.status(400).send({ message: error.message, status: false });
  }
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(process.env.port, "database connected successfuly");
  } catch (err) {
    console.log(err.message);
  }
});
