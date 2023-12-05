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
// app.use(cors());

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

app.post("/order", async (req, res) => {
  const { amount, currency, receipt } = req.body;
  const options = {
    amount: amount * 100, // Razorpay expects the amount in paise
    currency,
    receipt: shortid.generate(),
  };
  try {
    const order = await razorpay.orders.create(options);
    console.log("response in backend=>", order);
    res.status(200).json({ message: "Payment done successfully", data: order });
  } catch (error) {
    return res.status(400).send({ message: error.message, status: false });
  }
});

app.post("/payment", async (req, res) => {
  try {
    let { paymentId } = req.body;
    console.log("paymentid=>", paymentId);
    res.status(200).send({ message: "Payment done successfully" });
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
