module.exports = (sequelize, DataTypes) => {
  const userfollowing = sequelize.define('userfollowing', {
    UID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Following: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })
  return userfollowing
}
