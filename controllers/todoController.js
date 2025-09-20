const Todo = require('../models/Todo');

let todos = [
    { id: 1, text: 'Học Express.js', completed: false },
    { id: 2, text: 'Xây dựng TO-DO app', completed: false },
    { id: 3, text: 'Test ứng dụng', completed: true },
    { id: 4, text: 'Viết tài liệu dự án', completed: false },
    { id: 5, text: 'Tạo giao diện người dùng', completed: false },
    { id: 6, text: 'Tối ưu hóa hiệu suất', completed: false },
    { id: 7, text: 'Kiểm thử chức năng', completed: true },
    { id: 8, text: 'Triển khai lên server', completed: false },
    { id: 9, text: 'Cập nhật README', completed: true },
    { id: 10, text: 'Tạo tài khoản Github', completed: true },
    { id: 11, text: 'Học về REST API', completed: false },
    { id: 12, text: 'Tìm hiểu về JWT', completed: false },
    { id: 13, text: 'Thêm chức năng đăng nhập', completed: false },
    { id: 14, text: 'Thêm chức năng đăng ký', completed: false },
    { id: 15, text: 'Tạo database mẫu', completed: true },
    { id: 16, text: 'Tạo seed data', completed: true },
    { id: 17, text: 'Tạo unit test', completed: false },
    { id: 18, text: 'Tạo integration test', completed: false },
    { id: 19, text: 'Tạo mock API', completed: true },
    { id: 20, text: 'Tìm hiểu về Docker', completed: false },
    { id: 21, text: 'Viết script khởi động', completed: false },
    { id: 22, text: 'Tạo file .env', completed: true },
    { id: 23, text: 'Cấu hình CORS', completed: true },
    { id: 24, text: 'Tối ưu hóa code', completed: false },
    { id: 25, text: 'Tạo middleware xác thực', completed: false },
    { id: 26, text: 'Tạo middleware logging', completed: false },
    { id: 27, text: 'Tạo trang 404', completed: true },
    { id: 28, text: 'Tạo trang lỗi server', completed: true },
    { id: 29, text: 'Thêm chức năng sửa todo', completed: false },
    { id: 30, text: 'Thêm chức năng xóa todo', completed: false },
    { id: 31, text: 'Tạo giao diện mobile', completed: false },
    { id: 32, text: 'Tối ưu responsive', completed: false },
    { id: 33, text: 'Tạo icon cho app', completed: true },
    { id: 34, text: 'Tạo favicon', completed: true },
    { id: 35, text: 'Tạo CI/CD pipeline', completed: false },
    { id: 36, text: 'Tìm hiểu về pnpm', completed: true },
    { id: 37, text: 'Tạo script deploy', completed: false },
    { id: 38, text: 'Tạo backup database', completed: false },
    { id: 39, text: 'Tạo chức năng lọc todo', completed: false },
    { id: 40, text: 'Tạo chức năng tìm kiếm', completed: false },
    { id: 41, text: 'Tạo chức năng phân trang', completed: false },
    { id: 42, text: 'Tạo chức năng sort', completed: false },
    { id: 43, text: 'Tạo chức năng ưu tiên', completed: false },
    { id: 44, text: 'Tạo chức năng nhắc nhở', completed: false },
    { id: 45, text: 'Tạo chức năng đồng bộ', completed: false },
    { id: 46, text: 'Tạo chức năng export', completed: false },
    { id: 47, text: 'Tạo chức năng import', completed: false },
    { id: 48, text: 'Tạo chức năng chia sẻ', completed: false },
    { id: 49, text: 'Tạo chức năng bình luận', completed: false },
    { id: 50, text: 'Tạo chức năng gắn tag', completed: false }
];

const getAllTodos = (req, res) => {
    try {
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi lấy danh sách todos' });
    }
}

// POST /api/todos - Tạo todo mới
const createTodo = (req, res) => {
    try {
        const { text } = req.body;

        const newToDo = {
            id: todos.length + 1,
            text,
            completed: false
        };

        todos.push(newToDo);
        return res.status(201).json({
            newToDo,
            message: 'Created a todo successfully'
        });
    } catch (e) {
        return res.status(500).json({ error: 'Created a todo fail' });
    }
};

// PUT /api/todos/:id - Cập nhật todo
const updateTodo = (req, res) => {
    try {
        const { id } = req.params;
        const { text, completed } = req.body;

        const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));

        if (todoIndex === -1) {
            return res.status(404).json({ error: 'Todo does not exist' });
        }

        todos[todoIndex] = { ...todos[todoIndex], text, completed };
        return res.status(200).json({ 
            todo: todos[todoIndex],
            message: 'Updated successfully'
        });
    } catch (e) {
        return res.status(500).json({ error: 'Error when update todo' });
    }
};

// DELETE /api/todos/:id - Xóa todo
const deleteTodo = (req, res) => {
    try {
        const { id } = req.params;  
        const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));

        if (todoIndex === -1) {
            return res.status(404).json({ error: 'Todo does not exist '});
        }

        todos.splice(todoIndex, 1);
        return res.status(200).json({ todo: todos[todoIndex], message: 'Deleted successfully' });
    } catch (e) {
        return res.status(500).json({ error: 'Error when delete todo' });
    }
};

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};