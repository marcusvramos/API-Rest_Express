import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros
            .find()
            .populate("autor")
            .exec((err, livros) => {
                try {
                    res.status(200).json(livros);
                } catch {
                    console.log(err);
                }
            });
    };

    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - falha ao cadastrar o livro.`,
                });
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    };

    static atualizarLivro = (req, res) => {
        const { id } = req.params;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Livro Atualizado com sucesso",
                });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static listarLivro = (req, res) => {
        const { id } = req.params;
        livros
            .findById(id)
            .populate("autor", "nome")
            .exec((err, livro) => {
                if (!err) {
                    res.status(200).json(livro);
                } else {
                    res.status(404).send({
                        message: `${err.message} - Falha ao encontrar ID`,
                    });
                }
            });
    };

    static excluirLivro = (req, res) => {
        const { id } = req.params;
        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "livro removido com sucesso" });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora;
        livros.find({ editora: editora }, {}, (err, livro) => {
            if (!err) {
                res.status(200).json(livro);
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };
}

export default LivroController;
