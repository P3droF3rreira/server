const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://pedrof3rreira06:57IuWzmDVBMY2aL3@poto.zqgwluj.mongodb.net/dafe?retryWrites=true&w=majority&appName=poto')
    .then(() => {console.log("conctado")})
    .catch (() => {console.log("deu nem em")})
