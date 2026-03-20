# 📦 The Data Hub – REST API Server

## 🔗 Demo Live Link
[Live Server](https://the-data-hub-k79e.onrender.com/)

## 📖 Overview

The Data Hub is a simple REST API server built using **Node.js** and **Express.js**.
This project demonstrates the fundamentals of backend development, including API routing, middleware, and CRUD operations using a mock in-memory database.

The server allows users to create, view, update, and delete blog posts through HTTP requests. It also includes a custom request logging middleware and a mock authentication route that returns a fake JWT token.

## 🚀 Features

- RESTful API endpoints for blog posts
- Create, read, update, and delete operations (CRUD)
- Custom middleware for request logging
- Fake authentication route with mock JWT token
- Mock database using an in-memory array
- API testing using Thunder Client

## 📂 API Endpoints

### The Data Hub – REST API Server
| Method | Endpoint | Description |
|------|------|------|
| GET | /posts | Retrieve all blog posts |
| GET | /posts/:id | Retrieve a single post by ID |
| POST | /posts | Create a new blog post |
| PUT | /posts/:id | Update a blog post |
| DELETE | /posts/:id | Delete a blog post |
| POST | /login | Mock login returning a fake JWT token |

## 🛠️ Tech Stack

- Runtime: Node.js
- Framework: Express.js
- API Testing: Thunder Client

## ⚙️ How to Run the Project

### Clone the repository
```bash
git clone https://github.com/MSabriBoy/The_Data_Hub.git
```

### Install dependencies
```bash
npm install
```
### Start the server using nodemon
```bash
npx nodemon server.js
```

### Server will run on:

http://localhost:5000

## 📌 Learning Outcomes

### This project helped in understanding:

1. Express server setup
2. REST API routing
3. Middleware in Express
4. Handling request parameters and body data
5. Building and testing backend APIs
