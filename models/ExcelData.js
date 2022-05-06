const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExcelData = new Schema({
  "Name of the Candidate": { type: String, required: true },
  Email: { type: String, required: true },
  "Mobile No.": { type: String },
  "Date of Birth": { type: String },
  "Work Experience": { type: String },
  "Resume Title": { type: String },
  "Current Location": { type: String },
  "Postal Address": { type: String },
  "Current Employer": { type: String },
  "Current Designation": { type: String },
});

module.exports = mongoose.model("ExcelSheetData", ExcelData);
