import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  type: String,
  location: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
});


export const jobModel = mongoose.model('jobs', jobSchema)