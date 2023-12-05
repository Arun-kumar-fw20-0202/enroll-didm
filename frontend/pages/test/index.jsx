import { Button } from "@nextui-org/react";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const Test = () => {
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const amount = 100;
  const currency = "INR";
  const receiptId = "qwsaq2";

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("http://localhost:8080/order", {
      method: "POST",
    }).then((t) => t.json());
    console.log("data in frontend=>", data);
    var options = {
      key: "rzp_test_thhLCCjTJvKt4l",
      name: "DIDM",
      currency: currency,
      amount: amount,
      order_id: data.id,
      description: "Payment",
      image: "https://i.ibb.co/Y0GR2SN/didmfavicon.png",
      handler: async function (response) {
        let obj = {
          paymentId: response.razorpay_payment_id,
        };
        console.log("response from callback", response);
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        const res = await axios.post("http://localhost:8080/payment", obj);
        const resData = await res.data;
        toast.success(resData?.message);
      },
      prefill: {
        name: "DIDM",
        email: "info@didm.in",
        contact: "8800505151",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div>
      <Button color="secondary" onClick={makePayment}>
        Pay Now
      </Button>
    </div>
  );
};

export default Test;
