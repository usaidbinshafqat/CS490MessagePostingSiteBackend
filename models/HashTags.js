module.exports = (sequelize, DataTypes) => {
  const hashtags = sequelize.define('hashtags', {
    HashTagID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    HashTag: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return hashtags
}
