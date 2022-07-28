const Contact = require("../model/Contact");

module.exports = {
    async index(req,res){
        Contact.findAll().then((result)=>{
            return res.json({
                status: "success",
                data: result
            });
        }).catch((e)=>{
            return res.json({
                status: "fail",
                message: e
            })
        })
    },

    async findById(req,res){
        const { id } = req.params;
        Contact.findAll({
            where:{
                id: id
            }
        }).then((result)=>{
            return res.json({
                status: "success",
                data: result
            })
        }).catch((e)=>{
            return res.json({
                status: "fail",
                message: e    
            })
        });
    },

    async insert(req,res){
        const { name, email, phone, birthDate, profilePhoto } = req.body;
        Contact.create({
            name, email, phone, birthDate, profilePhoto
        }).then((result)=>{
            return res.json({
                status: "success",
                data: result
            })
        }).catch((e)=>{
            return res.json({
                status: "fail",
                message: e    
            })
        });
    },

    async delete(req,res){
        const { id } = req.params;
        Contact.destroy({
            where:{
                id: id
            }
        }).then((result)=>{
            return res.json({
                status: "success",
                data: result
            })
        }).catch((e)=>{
            return res.json({
                status: "fail",
                message: e    
            })
        });
        
    },

    async update(req,res){
        const { id, name, email, phone, birthDate, profilePhoto } = req.body;
        Contact.update({
            name, email, phone, birthDate, profilePhoto
        },{
            where: {
                id: id
            }
        }).then((result)=>{
            return res.json({
                status: "success",
                data: result
            })
        }).catch((e)=>{
            return res.json({
                status: "fail",
                message: e    
            })
        });
    }

}