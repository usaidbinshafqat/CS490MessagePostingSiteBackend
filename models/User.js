module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    UID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DateOfRegistration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PicturePath: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  return user
}
