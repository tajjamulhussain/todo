import express from "express";
import {
  todoCreate,
  todoUpdate,
  todoDelete,
  GetallTodo,
} from "../controller/todoController.js";

const router = express.Router();

router.post("/create", todoCreate);
router.patch("/:id", todoUpdate);
router.delete("/:id", todoDelete);
router.get("/", GetallTodo);

export default router;
