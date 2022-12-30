import autores from "../models/Autor.js";

class autorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            try {
                res.status(200).json(autores);
            } catch {
                console.log(err);
            }
        });
    };

    static cadastrarAutores = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - falha ao cadastrar o autor.`,
                });
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    };

    static atualizarAutor = (req, res) => {
        const { id } = req.params;

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "autor Atualizado com sucesso",
                });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static listarAutor = (req, res) => {
        const { id } = req.params;
        autores.findById(id, (err, autor) => {
            if (!err) {
                res.status(200).json(autor);
            } else {
                res.status(404).send({
                    message: `${err.message} - Falha ao encontrar ID`,
                });
            }
        });
    };

    static excluirAutor = (req, res) => {
        const { id } = req.params;
        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "autor removido com sucesso" });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };
}

export default autorController;
