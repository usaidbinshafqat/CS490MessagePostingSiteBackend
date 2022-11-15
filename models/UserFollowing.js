module.exports = (sequelize, DataTypes) => {
  const userfollowing = sequelize.define('userfollowing', {
    UID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Following: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  return userfollowing
}
