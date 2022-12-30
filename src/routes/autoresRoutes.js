import express from "express";
import autoresController from "../controllers/autoresController.js";

const router = express.Router();

router.get("/autores", autoresController.listarAutores);
router.post("/autores", autoresController.cadastrarAutores);
router.put("/autores/:id", autoresController.atualizarAutor);
router.get("/autores/:id", autoresController.listarAutor);
router.delete("/autores/:id", autoresController.excluirAutor);

export default router;
