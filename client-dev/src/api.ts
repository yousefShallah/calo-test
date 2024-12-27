import axios from "axios";
import { TCreateJob } from "./types";

// Axios instance for backend API
const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Create a new job
export const createJob = async (body: TCreateJob) => {
  const response = await api.post("/jobs", { ...body });
  return response.data;
};

// Fetch all jobs
export const fetchJobs = async () => {
  const response = await api.get("/jobs");
  return response.data;
};

// Fetch job by ID
export const fetchJobById = async (id: string) => {
  const response = await api.get(`/jobs/${id}`);
  return response.data;
};

export default api;
