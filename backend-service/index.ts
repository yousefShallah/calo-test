import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Job } from "./types";
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

const jobs: Job[] = [];

app.post("/jobs", (req: any, res: any) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required." });
  }
  const newJob: Job = {
    id: uuidv4(),
    title,
    description,
    resolved: false,
  };
  jobs.push(newJob);

  res.status(201).json({ id: newJob.id });
});

// GET /jobs/{id} - get job by ID
app.get("/jobs/:id", (req: any, res: any) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ error: "Job not found." });
  }
  if (job.resolved) {
    return res.json({
      id: job.id,
      title: job.title,
      description: job.description,
      resolved: true,
      result: job.result,
    });
  } else {
    return res.json({
      id: job.id,
      resolved: false,
    });
  }
});

// GET /jobs - all jobs
app.get("/jobs", (req: Request, res: Response) => {
  const formattedJobs = jobs.map((job) => {
    if (job.resolved) {
      return {
        id: job.id,
        title: job.title,
        description: job.description,
        resolved: true,
        result: job.result,
      };
    } else {
      return {
        id: job.id,
        title: job.title,
        description: job.description,
        resolved: false,
      };
    }
  });

  res.json(formattedJobs);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
