const Todo = require('../models/todo');

//create a todo
exports.addTodo = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ message: "Please enter a title" });
        }
        const todo = await Todo.create({
            title
        })

        return res.status(201).json({
            success: true,
            message: "Todo created successfully",
            todo
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Error creating todo',
            error: error.message
        })
    }
}

// findall todos
exports.findAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        return res.status(200).json({
            success: true,
            message: "Todos found successfully",
            todos
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Error finding all todos',
        })
    }
}

//update a todo
exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const { completed } = req.body;
        if (!id) {
            return res.status(400).json({ message: "Please enter a valid id" });
        }
        const todo = await Todo.findByIdAndUpdate(id, {
            completed
        }, { new: true })
        return res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            todo
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Error updating todo',
        })
    }
}

//delete a todo
exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Please enter a valid id" });
        }
        const todo = await Todo.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Error deleting todo',
        })
    }
}