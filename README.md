Full-Stack Web App - Job Service
This project is a simple full-stack web app developed using Node.js, React.js (with TypeScript), and Ant Design UI library. It allows users to create jobs, view the list of jobs with a delayed response (between 5 seconds to 5 minutes).

Features
Display a list of jobs.
Create a new job.
Handle multiple pending jobs and unstable internet connections.

Tech Stack
Backend: Node.js, Express
Frontend: React.js, TypeScript, Ant Design
Database: In-memory (for simplicity)
Authentication: None (optional to implement later)
Other Tools: Vite (for bundling and dev server)


Time Report
Here’s a breakdown of the time spent on each section:

1. Project Initialization (2 hours)
Set up the basic file structure.
Initialized the Node.js backend with Express and React.js frontend with Vite and TypeScript.
Installed necessary dependencies like Express, CORS, Ant Design, etc.

2. Backend Development (1 hours)
Created the Express API to handle the following routes:
GET /jobs: Fetch a list of jobs.
GET /jobs/:id: Fetch job.
POST /jobs: Create a new job.

3. Frontend Development (2 hours)
Developed the React UI to:
Display a list of jobs.
Allow users to create a new job.
Show job status or result when resolved.

4. Handling Delayed Jobs (1 hours)
Simulated random delays for job resolution (from 5 seconds to 5 minutes).
Managed multiple pending jobs and ensured results are displayed once resolved.

5. Testing & Debugging (1 hours)
Tested the API and frontend components.
Fixed bugs related to state management, job resolution delays, and error handling.
Ensured the app works under conditions of unstable internet (e.g., handling retries or failures).

6. Final Adjustments (1 hours)
Added README documentation.
Cleaned up the code and push.
