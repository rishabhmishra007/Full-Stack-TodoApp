# Full-Stack Todo Application

A simple full-stack todo application that allows users to manage their tasks. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it supports basic CRUD operations: create, read, update, and delete tasks.

## 🌟 Features
- Add new todos
- View a list of all todos
- Mark todos as complete/incomplete
- Delete todos
- Responsive user interface

## 🛠️ Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: Axios (for API calls), Nodemon (for development)

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/6b47bedd-f857-4b62-adf8-f850c633bb64)


## ⚙️ Installation and Setup
To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name
2. **Install dependencies for both client and server**:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
3. **Create a .env file inside the server folder with the following variables**:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   PORT=4000
4. **Run the application**:
 - Start the server:   
   ```bash
   cd server
   npm run dev
  - Start the client:
    ```bash
    cd ../client
    npm start
5. *Access the app: Open your browser and go to http://localhost:3000 for the frontend and http://localhost:4000/api/todo for the API.*

## 📖 Usage
1. Add new tasks using the input field.
2. View existing tasks in the list.
3. Toggle the completion status of a task by clicking the checkbox.
4. Delete a task by clicking the delete button.
