const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Conectado!')
    } catch (error){
        console.error('Erro na Conexão com o Banco de Dados:', error); // Registra o erro real
    }
}

module.exports = db;