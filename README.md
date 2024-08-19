# Help Center API Assignment

## Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ayushchandra97/fullstack-assignment
   cd fullstack-assignment
   ```

2. **Frontend:**
   - Navigate to the frontend directory.
     ```bash
     cd frontend
     ```
   - Install the dependencies.
     ```bash
     npm install
     ```
   - Start the Vite React development server:
     ```bash
     npm run dev
     ```

3. **Backend:**
   - Navigate to the backend directory.
     ```bash
     cd backend
     ```
   - Install the dependencies.
     ```bash
     npm install
     ```
   - Start the Node.js server (nodemon):
     ```bash
     npm run devStart
     ```
   - or 
     ```bash
     npm start
     ```
   - The backend server uses MongoDB as database. So in order to run the server locally create a new connection locally and use that connection url with database name as the parameter (eg, `mongodb://localhost:27017/HelpCenterCard`) inside of the `mongodb_url` variable in the server.js file located inside the backend directory.