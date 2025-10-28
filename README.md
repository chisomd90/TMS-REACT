# 🎫 Ticket Management System (TMS)

A web-based **Ticket Management System** built with **React (Vite)** for managing and tracking tickets efficiently.  
It includes authentication, protected dashboard routes, and full ticket CRUD functionality — all handled using **localStorage** for persistence.

---

## 🚀 Features

### 🔐 Authentication
- Register and login functionality (stored in localStorage)  
- Protected routes to prevent unauthorized access  
- Automatic redirect to login when not authenticated  

### 🧾 Ticket Management (CRUD)
- Create, view, edit, and delete tickets  
- Real-time updates with state management  
- Data persistence via browser localStorage  

### 🧭 Dashboard
- Clean and responsive dashboard layout  
- Organized navigation with sidebar and routes  
- Nested routes for better structure (`DashboardHome`, `Tickets`)  

### ⚡ User Experience
- Toast notifications for success and error messages (via **React Hot Toast**)  
- 404 Error page for undefined routes  
- Fully responsive and modern UI  

---

## 🧱 Tech Stack

| Category | Technologies Used |
|-----------|-------------------|
| **Frontend** | React (Vite), React Router DOM |
| **State Management** | React Hooks (useState, useEffect) |
| **Styling** | CSS |
| **Notifications** | react-hot-toast |
| **Routing** | react-router-dom v6 |
| **Persistence** | localStorage |
| **Deployment** | Vercel |

---

## 📁 Folder Structure