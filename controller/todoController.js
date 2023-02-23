import Todo from "../model/todoModel.js";
import express from "express";
import {
  createTodo,
  updateTodo,
  deleteTodo,
  allTodo,
} from "../service/todoService.js";
const todoCreate = async (req, res) => {
  try {
    let { name, complete } = req.body;
    const Todo = await createTodo({
      name,
      complete,
    });
    return res.status(200).json({ Todo });
  } catch (err) {
    console.log("error", err);
  }
};
const todoUpdate = async (req, res) => {
  try {
    let Todo = await updateTodo(
      {
        _id: req.params.id,
      },
      {
        ...req.body,
      }
    );

    return res.status(200).json({ Todo, message: "updated" });
  } catch (err) {
    console.log("error", err);
  }
};

const todoDelete = async (req, res) => {
  try {
    let Todo = await deleteTodo({
      _id: req.params.id,
    });
    return res.status(200).json({ Todo, message: "deleted" });
  } catch (err) {
    console.log("error", err);
  }
};
const GetallTodo = async (req, res) => {
  try {
    let Todo = await allTodo();
    return res.status(200).json({ Todo, message: "allTodo" });
  } catch (err) {
    console.log("error", err);
  }
};
export { todoCreate, todoUpdate, todoDelete, GetallTodo };
