# 📦 Product Catalog

A simple product management system built with **Next.js (frontend)** and **Node.js + MySQL (backend)**.
This app allows admins to **add, edit, delete, and manage products**.

---

## 🚀 Features

* ➕ Add new products
* ✏️ Edit existing products
* 🗑️ Soft Delete products (with `is_deleted` flag)
* 📋 View all products in a table
* 🔐 Authentication context (admin login state)
* 🔔 Toast notifications for actions

---

## 🛠 Tech Stack

* **Frontend:** Next.js, React, CSS Modules, Axios, React-Toastify
* **Backend:** Node.js, Express.js, MySQL
* **Database:** MySQL
* **Deployment Ready:** Docker

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/GulshanJha00/ProductManager.git
cd ProductManager
```

2. **Install dependencies**
   Frontend:

```bash
cd frontend
npm install
```

Backend:

```bash
cd ../backend
npm install
```

3. **Setup Environment Variables**
   Inside `backend/`, create a `.env` file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=product_catalog
```

4. **Create the Database Schema**
   Login to MySQL and run:

```sql
CREATE DATABASE product_catalog;

USE product_catalog;

CREATE TABLE Products (
    product_id      INT AUTO_INCREMENT PRIMARY KEY,
    product_name    VARCHAR(100) NOT NULL,
    product_desc    TEXT,
    status          ENUM('Draft', 'Published', 'Archived') DEFAULT 'Draft',
    created_by      VARCHAR(50) NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by      VARCHAR(50),
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_deleted      BOOLEAN DEFAULT FALSE
);

```

5. **Start the Backend**

```bash
cd backend
npm run dev
```

6. **Start the Frontend**

```bash
cd frontend
npm run dev
```

App will run at 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📡 API Routes

### Product Routes

* **GET** `/api/getItem` → Fetch all products
* **POST** `/api/addItem` → Add a new product
* **PUT** `/update/:id` → Update product details
* **PUT** `/delete/:id` → Soft delete product

---



## ✨ Author

**Gulshan Kumar**

---
