# Lab 4: Intermediate React - Capstone Project "BlogDash"

This repository contains the implementation of the Capstone Project "BlogDash" for Lab 4: Intermediate React. The application is a multi-page blog dashboard integrating key React concepts such as Hooks, Context API, and Routing.

## 👤 Author Information

* **Name:** Bùi Minh Bảo Trung
* **Student ID:** 23521671

## 🚀 Live Demo

You can view the deployed application here:
👉 **[https://lab4-tau-seven.vercel.app/](https://lab4-tau-seven.vercel.app/)**

---

## ✨ Features implemented

This project fulfills the requirements of Part 8 (Capstone Project) of the lab:

1.  **Authentication Flow:**
    * **AuthContext:** Manages global authentication state (`isAuthenticated`).
    * **Login Page:** Uses `useRef` to auto-focus the username input and handles login simulation.
    * **Protected Routes:** Blocks access to the Dashboard if the user is not logged in.

2.  **Data Fetching:**
    * **Custom Hook (`useFetch`):** Reusable hook to handle data fetching, loading states, and error handling.
    * Fetches posts from `jsonplaceholder.typicode.com`.

3.  **Routing (React Router v6):**
    * **Dynamic Routing:** Navigates to specific post details (`/dashboard/post/:postId`).
    * **Nested Routes:** Organizes dashboard views efficiently.

## 🛠️ How to Run Locally

If you want to run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/btrungg12/lab4](https://github.com/btrungg12/lab4)
    cd blog-dash-lab4
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

---

*This project was built with React (Vite) and deployed on Vercel.*
