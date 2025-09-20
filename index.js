const express = require('express');
const cors = require('cors');
const path = require('path');

const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(cors()); // allow cors
app.use(express.json()); // parse json from req body
app.use(express.static('public')); // serve static files from public folder

const PORT = process.env.PORT || 3000;

// Sử dụng routes
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

