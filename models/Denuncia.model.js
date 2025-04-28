const mongoose = require('mongoose');

const DenunciaSchema = mongoose.Schema(
    {
        titulo: {
            type : String,
            required: [true, "Adicione um Titulo"]
        },
        topico: {
            type : String,
            required: [true, "Adicione um tópico"]
        },
        conteudo: {
            type : String,
            minLength: 20,
            required: [true, "Adicione o conteudo da postagem"],
            
        },
        id_Aluno: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Aluno', 
            required: true }
    }
);
