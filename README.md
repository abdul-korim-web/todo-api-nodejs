# 📝 Todo API (Node.js)

A simple RESTful API built using **Node.js** (without Express) to manage a list of Todo items.  
You can **create**, **read**, **update**, and **delete** todos using HTTP methods (GET, POST, PUT, DELETE).

---

## 🚀 Features

- 🧾 Get all todos  
- 🔍 Get single todo by ID  
- ➕ Add new todo  
- ✏️ Update existing todo  
- ❌ Delete todo by ID  

---

## 🧠 Tech Stack

- Node.js (built-in `http` and `url` modules)
- JSON for data storage (in-memory)

---

## ⚙️ API Endpoints

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| GET    | `/todo`          | Get all todo items        |
| GET    | `/todo/:id`      | Get a single todo by ID   |
| POST   | `/todo`          | Add a new todo            |
| PUT    | `/todo/:id`      | Update a todo by ID       |
| DELETE | `/todo/:id`      | Delete a todo by ID       |

---

## 🧩 Example Request (POST)

```bash
curl -X POST http://localhost:5000/todo \
-H "Content-Type: application/json" \
-d '{
  "title": "Learn Node.js",
  "description": "Understand core modules",
  "status": false
}'
```

# 🛠️ How to Run

# Clone the repository:
```bash
git clone https://github.com/abdul-korim-web/todo-api-nodejs
```
# Navigate to the project folder:
```bash
cd todo-api-nodejs
```
# Start the server:
```bash
node index.js
```

# Open your browser or Postman:
http://localhost:5000/todo

## 📜 License & Copyright

This project is **open-source and free to use** under the **MIT License**.  

You can freely:
- ✅ View, modify, and use the source code  
- ✅ Distribute or include it in your own projects  
- ✅ Use it for personal or commercial purposes  

Just make sure to keep the original author credit:

**© 2025 Abdul Korim**

## For collaboration or inquiries, contact:  
📧 Email: abdulkorimwebdeveloper@gmail.com <br>
👉 GitHub: [abdul-korim-web](https://github.com/abdul-korim-web) <br>
👉 Facebook: [abdul-korim-web](https://www.facebook.com/abdulkorimweb) <br>
👉 LinkedIn: [abdul-korim-web](https://www.linkedin.com/in/abdul-korim-web/) <br>