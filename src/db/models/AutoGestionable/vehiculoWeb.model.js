const {Model,DataTypes, Sequelize} = require('sequelize');

const VEHICULOWEB_TABLE = 'vehiculosWeb';
const vehiculoWebSchema  = {
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
  fabricante: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class VehiculoWeb extends Model{
  // crear metodos estaticos
  static associate(models){
   

  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName:  VEHICULOWEB_TABLE,
      modelName: 'VehiculoWeb',
      timestamps: false
    }
  }
}
module.exports = {
  VEHICULOWEB_TABLE,
  vehiculoWebSchema,
  VehiculoWeb
}
