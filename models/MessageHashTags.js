module.exports = (sequelize, DataTypes) => {
  const messagehashtags = sequelize.define('messagehashtags', {
    MsgHashTagID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    MessageID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HashTagID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  return messagehashtags
}
