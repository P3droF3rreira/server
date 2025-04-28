const mongoose = require('mongoose');

const AlunoSchema = mongoose.Schema(
    {
        nome: {
            type : String,
            required: [true, "Adicione um nome à instituição"]
        },

    }
);
