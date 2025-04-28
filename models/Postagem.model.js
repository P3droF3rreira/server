const mongoose = require('mongoose');

const PostagemSchema = mongoose.Schema(
    {
        titulo: {
            type : String,
            required: [true, "Adicione um titulo a postagem"]
        },
        conteudo: {
            type : String,
            minLength: 20,
            required: true
        },
        descricao: {
            type : String,
            minLength: 20,
            required: true
        },
        data: {
            type : Date,
            required: true
        },
        topico: {
            type : String,
            required: [true, "Adicione um tópico"]
        },
        interacao: {
            type : int,
            required: true,
            minLength: 0
        }
    }
);
