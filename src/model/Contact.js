const {Model, DataTypes} = require('sequelize');

class Contact extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.INTEGER,
            birthDate: DataTypes.DATE,
            profilePhoto: DataTypes.BLOB,
        },{
            sequelize
        })
    }

}

module.exports = Contact;