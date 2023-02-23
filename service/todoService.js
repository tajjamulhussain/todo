import Todo from "../model/todoModel.js";
const createTodo = async (query) => {
  return await Todo.create(query);
};
const allTodo = async (query) => {
  return await Todo.find(query);
};
const updateTodo = async (query, data) => {
  return await Todo.findOneAndUpdate(query, data, {
    new: true,
  });
};
const deleteTodo = async (query) => {
  return await Todo.findOneAndRemove(query);
};
export { createTodo, allTodo, updateTodo, deleteTodo };
