const express = require("express")
const { criarUsuario, listarUsuarios, atualizarUsuario, deletarUsuario, loginUsuario, obterUsuario } = require("../controladores/usuarioControlador")
const { criarPost, listarPost, deletarPost, likePost } = require("../controladores/postControlador")
const { listarComentario, criarComentario, likeComentario, deletarComentario } = require("../controladores/comentarioControlador")
const router = express.Router()


// Cadastro e Login
router.post("/", criarUsuario)
router.get("/", listarUsuarios)
router.get("/:id", obterUsuario)
router.put("/:id", atualizarUsuario)
router.delete("/:id", deletarUsuario)
router.post("/login", loginUsuario)

// Criação de Posts e Like
router.post("/posts", criarPost)
router.get("/posts/listar", listarPost)
router.delete("/posts/:postId", deletarPost) 
router.post("/posts/:postId/like", likePost)

// Criação de comentarios e like

router.get('/posts/:postId/comentarios', listarComentario);
router.post("/posts/:postId/comentarios", criarComentario)
router.post("/posts/:postId/comentarios/:comentarioId/like", likeComentario)
router.delete('/posts/:postId/comentarios/:comentarioId', deletarComentario);

module.exports = router