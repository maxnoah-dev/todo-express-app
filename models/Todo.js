// Model định nghĩa cấu trúc dữ liệu Todo
class Todo {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

    // Static method để tạo todo mới
    static create(text) {
        return new Todo(date.now(), text, false);
    }

    update(text, completed) {
        this.text = text;
        this.completed = completed;
        return this;
    }
}

module.exports = Todo;