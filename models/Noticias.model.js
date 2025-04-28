const mongoose = require('mongoose');

const NoticiasSchema = mongoose.Schema(
    {
        subtitulo: {
            type : String,
            required: [true, "Adicione um subtitúlo"]
        },
        titulo: {
            type : String,
            required: [true, "Adicione um titulo"]
        },
        conteudo: {
            type : String,
            required: [true, "Adicione o conteúdo da notícia"]
        },
        id_Funcionario: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Funcionario', 
            required: true }

    }
);
