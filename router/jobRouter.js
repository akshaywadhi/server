import { addJob, getJobs,jobsById } from "../controller/jobController.js";
import express from 'express'


export const router = express.Router()


router
.get('/jobs', getJobs)
.post('/jobs', addJob)
.get('/jobs/:id', jobsById);



