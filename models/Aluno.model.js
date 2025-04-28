const mongoose = require('mongoose');

const AlunoSchema = mongoose.Schema(
    {
        nome: {
            type : String,
            required: [true, "Adicione um nome ao Aluno"]
        },
        senha: {
            type : String,
            required: [true, "Adicione uma senha"]
        },
        email: {
            type : String, unique,
            required: [true, "Adicione um email"],
            
        },
        usuario: {
            type : String,
            required: [true, "Adicione um um usuário"]
        },
        curso: {
            type : String,
            required: [true, "Adicione um um curso"]
        },
        modulo: {
            type : int,
            required: [true, "Adicione um modulo"]
        },
        id_usu: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Usuario', 
            required: true }
    }
);

