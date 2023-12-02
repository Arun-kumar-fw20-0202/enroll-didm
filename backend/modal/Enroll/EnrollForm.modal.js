const mongoose = require("mongoose");

const enrollForm = mongoose.Schema(
  {
    cd_name: { type: String, required: true },
    phone_number: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    company: { type: String, required: true },
    category: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    training_mode: { type: String, required: true },
    branch: { type: String, required: true },
    batch_type: { type: String, required: true },
    want_job_placement: { type: String, required: true },
    rate_your_relationship_manager: { type: String, required: true },
    course_type: { type: String, required: true },
    aggree: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const enrollModal = mongoose.model("enroll_form", enrollForm);

module.exports = { enrollModal };
