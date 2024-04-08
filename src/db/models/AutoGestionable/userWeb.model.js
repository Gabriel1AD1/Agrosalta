const {Model,DataTypes, Sequelize} = require('sequelize');

const USERWEB_TABLE = 'UserWeb';
const userWebSchema  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
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
 
class UserWeb extends Model{
  // crear metodos estaticos
  static associate(models){

    this.belongsToMany(models.Vehiculo, {
      as: 'items',
      through: models.ClienteVehiculo,
      foreignKey: 'clienteId',
      otherKey: 'vehiculoId'
    });
    
   this.hasMany(models.Operacion, {as: 'operaciones', foreignKey: 'clienteId'});
  }
  // definir otro estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName:  USERWEB_TABLE,
      modelName: 'UserWeb',
      timestamps: false
    }
  }
}
module.exports = {
  USERWEB_TABLE,
  userWebSchema,
  UserWeb
}


