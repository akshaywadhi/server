import { jobModel } from "../model/jobModel.js";




export const getJobs = async (req, res) => {
  try {
    const jobs = await jobModel.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({err : err});
  }
}

export const addJob = async (req, res) => {
  const { title, company, type, location, description } = req.body;

  if (!title || !company || !type || !location || !description)
    return res.status(400).json({ message: "all fields must be filled" });

  const job = new jobModel({ 
    title,
    company,
    type,
    location,
    description });

  try {

    const savedJob = await job.save();

    res.status(201).json({
      message : 'Job Added',
      savedJob
    });
  } catch (err) {

    res.status(400).json({ err : err});
  }
};


export const jobsById = async (req, res) => {
  const id = req.params.id
  try {
    const job = await jobModel.findById(id);
    if (!job) return res.status(404).json({ message: 'job not found' });

    res.json(job);

  } catch (err) {
    
    res.status(500).json({err : err});
  }
}