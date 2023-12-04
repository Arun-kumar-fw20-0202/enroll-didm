const mongoose = require("mongoose");

const enrollForm = mongoose.Schema(
  {
    cd_name: { type: String, required: true },

    phone_number: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },

    company: { type: String, required: false },
    category: { type: String, required: false },
    // city: { type: String, required: false },
    state: { type: String, required: false },
    training_mode: { type: String, required: false },
    branch: { type: String, required: false },
    batch_type: { type: String, required: false },
    want_job_placement: { type: String, required: false },
    rate_your_relationship_manager: { type: String, required: false },
    course_type: { type: String, required: false },
    aggree: { type: String, required: false },
    discount: { type: String, required: false },
  },
  {
    versionKey: false,
  }
);

const enrollModal = mongoose.model("enroll_form", enrollForm);

module.exports = { enrollModal };
