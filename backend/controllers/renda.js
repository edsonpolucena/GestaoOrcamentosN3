

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
            return res.status(400).json({message: 'Todos os campos devem ser preenchidos!'})
        }
        if (amount <=0 || !amount === 'number'){
            return res.status(400).json({message: 'A Renda deve ser positiva!'})
        }
        await renda.save()
        res.status(200).json({message: 'Renda Adicionada'})
    } catch (error){
        res.status(500).json({message: 'Erro Servidor'})

    }
    console.log(renda)
}
exports.getRenda = async (req, res) =>{
    try {
        const renda = await RendaSchema.find().sort({createAt:-1})
        res.status(200).json(renda)
    } catch (error){
        res.status(500).json({message:'Erro Servidor'})

    }
}
exports.deleteRenda = async (req, res) =>{
    const {id} = req.params;
    console.log(req.params);
    RendaSchema.findByIdAndDelete(id)
        .then((renda) =>{
            res.status(200).json({message:'Renda Deletada'})
        })
        .catch((err) =>{
            res.status(500).json({message:'Erro Servidor'})
        })

}