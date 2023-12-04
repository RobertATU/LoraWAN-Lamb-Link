const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
   
    sheepId: {
      type: String,
      required: true,
      min: 3,
      max: 60,
    },
    long: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);
