const mongoose = require('mongoose');

const FormularioSchema = mongoose.Schema(
    {
        titulo: {
            type : String,
            required: [true, "Adicione um titulo"]
        },
        topico: {
            type : String,
            required: [true, "Adicione uma senha"]
        },
        id_Funcionario: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Funcionario', 
            required: true }
    }
);
