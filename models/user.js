const {sequelize} = require('../utils/db')
const  {Model, DataTypes} = require('sequelize')
class User extends Model {}
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passHash: {
      type: DataTypes.STRING,
      allowNull: false
    }
   
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'user'
  })

module.exports = User