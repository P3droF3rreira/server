const mongoose = require('mongoose');

const RespostasSchema = mongoose.Schema(
    {
        titulo: {
            type : String,
            required: [true, "Adicione um titulo"]
        },
        topico: {
            type : String,
            required: [true, "Adicione um tópico"]
        },
        id_Aluno: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Aluno', 
            required: true }
    }
);
