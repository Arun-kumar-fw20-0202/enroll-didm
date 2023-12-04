const mongoose = require("mongoose");

const enrollForm = mongoose.Schema(
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

    company: { type: String, required: [true, "company is required"] },
    category: { type: String, required: [true, "category is required"] },
    cityname: { type: String, required: [true, "cityname is required"] },
    state: { type: String, required: [true, "state is required"] },
    training_mode: { type: String, required: [true, "training is required"] },
    branch: { type: String, required: [true, "branch is required"] },
    batch_type: { type: String, required: [true, "branch type is required"] },
    want_job_placement: {
      type: String,
      required: [true, "placement field is required"],
    },
    rate_your_relationship_manager: {
      type: String,
      required: [true, "relationship field is required"],
    },
    course_type: { type: String, required: [true, "course type is required"] },
    agree: { type: String, required: [true, "agree field is required"] },
    discount: { type: String, required: false },
  },
  {
    versionKey: false,
  }
);

const enrollModal = mongoose.model("enroll_form", enrollForm);

module.exports = { enrollModal };
