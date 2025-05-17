# BAWASA Dashboard 💧

A water system analytics dashboard for the Barangay Water System Association (BAWASA). This project was built for our Capstone to help visualize water usage, billing trends, and user demand in a local barangay setting.
---
## 📊 Overview

The **BAWASA Dashboard** consists of a backend RESTful API built with **Node.js** and **MySQL**, and a frontend dashboard built with **HTML/CSS/JS** using **Chart.js** and **Bootstrap**. It displays dynamic charts for real-time monitoring of water usage, consumption trends, and billing analysis.

This system aims to:
- Improve transparency in water billing
- Provide accurate usage analytics for forecasting
- Help barangay officials make informed decisions
---
## 📂 Dataset Used

The project uses a custom dataset collected from the **Barangay Quipot Water System**. This includes:
- Monthly water consumption (in cubic meters)
- Billing amounts
- Customer information
- Payment records

All data is stored in a **MySQL** database and exposed through a REST API.
---
## 🛠 Instructions to Install and Run

### 1. Clone the Repository
```bash
git clone https://github.com/alegriavee/sem-project.git
cd sem-project

Here's a complete and professional `README.md` file for your project based on everything you've provided:

---

````markdown
# BAWASA Dashboard 💧

A water system analytics dashboard for the Barangay Water System Association (BAWASA). This project was built for our Capstone to help visualize water usage, billing trends, and user demand in a local barangay setting.

---

## 📊 Overview

The **BAWASA Dashboard** consists of a backend RESTful API built with **Node.js** and **MySQL**, and a frontend dashboard built with **HTML/CSS/JS** using **Chart.js** and **Bootstrap**. It displays dynamic charts for real-time monitoring of water usage, consumption trends, and billing analysis.

This system aims to:
- Improve transparency in water billing
- Provide accurate usage analytics for forecasting
- Help barangay officials make informed decisions

---

## 📂 Dataset Used

The project uses a custom dataset collected from the **Barangay Quipot Water System**. This includes:
- Monthly water consumption (in cubic meters)
- Billing amounts
- Customer information
- Payment records

All data is stored in a **MySQL** database and exposed through a REST API.

---

## 🛠 Instructions to Install and Run

### 1. Clone the Repository
```bash
git clone https://github.com/alegriavee/sem-project.git
cd sem-project
````

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` and configure your DB settings:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=bawasa
```

Start the backend server:

```bash
node app.js
```

### 3. View the Frontend

Open the `frontend/index.html` file in your browser, or visit the live version:

```
https://alegriavee.github.io/sem-project/
```

---

## 📦 Dependencies

### Backend

* express
* mysql2
* dotenv
* cors

Install them using:

```bash
npm install express mysql2 dotenv cors
```

### Frontend

* Chart.js
* Bootstrap 5
* jQuery (optional, if used)

---

## 📈 Dashboard Charts

* 📉 Line Chart — Monthly Water Usage Trends
* 📊 Bar Chart — Billing Comparison by Customer
* 🌀 Radar Chart — Usage Distribution
* 🍩 Pie/Donut Chart — Payment Status Breakdown

---

## 🙌 Authors

* **Veejay A. Adame** — Project Manager
* **Bon Andei L. Atienza** — Designer
* **John Nathaniel A. Gutierrez** — System Analyst

---

## 🔖 License

This project is for educational purposes as part of our Capstone under the Business Analytics program.

````

---

### ✅ Next Steps:

You can save this as `README.md` in your project root and commit it:

```bash
git add README.md
git commit -m "Add project README"
git push origin main


