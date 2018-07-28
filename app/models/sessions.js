module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    expires: DataTypes.DATE,
    data: DataTypes.TEXT,
  });

  return User;
};
