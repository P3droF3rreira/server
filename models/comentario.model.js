const mongoose = require('mongoose');

const ComentarioSchema = mongoose.Schema(
    {
        conteudo: {
            type : String,
            required: true
        },
        data: {
            type : date,
            required: true,
        },
        id_aluno: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Aluno', 
            required: true },
        id_postagem: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Postagem', 
            required: true }
    }
);
