const mongoose = require("mongoose");

const enrollForm = new mongoose.Schema(
  {
    cd_name: { type: String, required: [true, "candidate name is required"] },

    phone_number: {
      type: String,
      required: [true, "phone number is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },

    category: { type: String, required: [true, "category is required"] },
    company: { type: String, required: [true, "company is required"] },
    cityname: { type: String, required: [true, "cityname is required"] },
    state: { type: String, required: [true, "state is required"] },
    training_mode: { type: String, required: [true, "training is required"] },
    branch: { type: String, required: [true, "branch is required"] },
    batch_type: { type: String, required: [true, "branch type is required"] },
    rate_your_relationship_manager: {
      type: String,
      required: [true, "relationship field is required"],
    },
    want_job_placement: {
      type: String,
      required: [true, "placement field is required"],
    },
    course_type: { type: String, required: [true, "course type is required"] },
    agree: { type: String, required: [false, "agree field is required"] },
    discount: { type: String, required: false },
    paymentStatus: { type: Boolean, default: false },
    paid_amount: {
      type: String,
    },
    course_amount: {
      type: String,
    },  
    paymentId: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const enrollModal = mongoose.model("enroll_form", enrollForm);

module.exports = { enrollModal };
