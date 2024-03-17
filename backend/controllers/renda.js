

// exports.addRenda = async (req, res) =>{
//     console.log(req.body);

const RendaSchema = require("../model/RendaModel")

// }
exports.addRenda = async (req,res)=> {
    const {title, amount, category, description, date} = req.body
    const renda = RendaSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validacoes
        if(!title || !category || !description || !date){
            return res.status(40)
        }
    }
}