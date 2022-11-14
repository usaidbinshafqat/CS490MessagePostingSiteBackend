module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    MessageID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    UID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TypeOfMessage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Path: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Likes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Privacy: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })
  return message
}
