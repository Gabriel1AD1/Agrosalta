
const {Model,DataTypes, Sequelize} = require('sequelize');

const USERINFORMATION_TABLE = 'userInformation';
const userInformationSchema  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  dni: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  celular: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  direccion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
   sexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  provincia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoConsumidor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoPersona: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codPostal: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  cuit: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}
 
class UserInformation extends Model{
  // crear metodos estaticos
  static associate(models){
    
    this.hasOne(models.userWeb,{
        as: 'userWeb',
        foreignKey: "id",
        onDelete: 'CASCADE'
    })
    
  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName:  USERINFORMATION_TABLE,
      modelName: 'UserInformation',
      timestamps: false
    }
  }
}
module.exports = {
  USERINFORMATION_TABLE,
  userInformationSchema,
  UserInformation
}
