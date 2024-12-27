"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const cors = require("cors");
const app = (0, express_1.default)();
const port = 3000;
app.use(cors());
app.use(express_1.default.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));
const jobs = [];
app.post("/jobs", (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res
            .status(400)
            .json({ error: "Title and description are required." });
    }
    const newJob = {
        id: (0, uuid_1.v4)(),
        title,
        description,
        resolved: false,
    };
    jobs.push(newJob);
    res.status(201).json({ id: newJob.id });
});
// GET /jobs/{id} - get job by ID
app.get("/jobs/:id", (req, res) => {
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
    }
    else {
        return res.json({
            id: job.id,
            resolved: false,
        });
    }
});
// GET /jobs - all jobs
app.get("/jobs", (req, res) => {
    const formattedJobs = jobs.map((job) => {
        if (job.resolved) {
            return {
                id: job.id,
                title: job.title,
                description: job.description,
                resolved: true,
                result: job.result,
            };
        }
        else {
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
