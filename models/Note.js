
module.exports = (sequelize, DataTypes) => {
    const Note = sequelize.define ('Note', {
        id: {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true,
        allowNull: false
      },
      name : {
        type: DataTypes.STRING,
        allowNull: false
      },
      tittle : {
        type: DataTypes.STRING,
        allowNull: false
      },
      note : {
        type: DataTypes.TEXT,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },{
        tableName: 'notes'
    });
    return Note;
}