const Contact = require("../model/Contact");

module.exports = {
    async index(req,res){
        const contact = await Contact.findAll();
        return res.json(contact);
    },

    async findById(req,res){
        const { id } = req.params;
        const contact = await Contact.findAll({
            where:{
                id: id
            }
        });
        return res.json(contact);
    },

    async insert(req,res){
        const { name, email, phone, birthDate, profilePhoto } = req.body;
        const contact = await Contact.create({
            name, email, phone, birthDate, profilePhoto
        });
        return res.json(contact);
    },

    async delete(req,res){
        const { id } = req.params;
        const contact = await Contact.destroy({
            where:{
                id: id
            }
        });
        return res.json(contact);
    },

    async update(req,res){
        const { id, name, email, phone, birthDate, profilePhoto } = req.body;
        const contact = await Contact.update({
            name, email, phone, birthDate, profilePhoto
        },{
            where: {
                id: id
            }
        });
        return res.json(contact);
    }

}