const {Model,DataTypes, Sequelize} = require('sequelize');
const {USERWEB_TABLE } = require('./userWeb.model');
const {VEHICULOWEB_TABLE } = require('./vehiculoWeb.model');


const CLIENTE_VEHICULO_WEB_TABLE = 'clientes_vehiculos';
const clienteVehiculoWebSchema  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USERWEB_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  vehiculoWebId: {
    field: 'vehiculo_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: VEHICULOWEB_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  origen: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  patente: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  año: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  motor: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  combustible: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  carroceria: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  tipo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  chasis: {
    type: DataTypes.STRING,
    allowNull: true,
  },
   color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  prendario: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}
 
class ClienteVehiculoWeb extends Model{
  // crear metodos estaticos
  static associate(models){
    this.belongsTo(models.Vehiculo, {as: 'vehiculo'});
  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName:  CLIENTE_VEHICULO_WEB_TABLE,
      modelName: 'ClienteVehiculoWeb',
      timestamps: false
    }
  }
}
module.exports = {
  CLIENTE_VEHICULO_WEB_TABLE,
  clienteVehiculoWebSchema,
  ClienteVehiculoWeb
} 
