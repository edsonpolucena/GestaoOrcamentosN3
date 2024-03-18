const DespesaSchema = require("../model/DespesaModel")


exports.addDespesa = async (req,res)=> {
    const {title, amount, category, description, date} = req.body
    const despesa = DespesaSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'Todos os campos devem ser preenchidos!'})
        }
        if (amount <=0 || !amount === 'number'){
            return res.status(400).json({message: 'A Despesa deve ser positiva!'})
        }
        await despesa.save()
        res.status(200).json({message: 'Despesa Adicionada'})
    } catch (error){
        res.status(500).json({message: 'Erro Servidor'})

    }
    console.log(despesa)
}
exports.getDespesa = async (req, res) =>{
    try {
        const despesa = await DespesaSchema.find().sort({createAt:-1})
        res.status(200).json(despesa)
    } catch (error){
        res.status(500).json({message:'Erro Servidor'})

    }
}
exports.deleteDespesa = async (req, res) =>{
    const {id} = req.params;
    console.log(req.params);
    DespesaSchema.findByIdAndDelete(id)
        .then((despesa) =>{
            res.status(200).json({message:'Despesa Deletada'})
        })
        .catch((err) =>{
            res.status(500).json({message:'Erro Servidor'})
        })

}