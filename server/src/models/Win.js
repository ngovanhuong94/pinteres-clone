module.exports = (sequelize, DataTypes) => {
  const Win = sequelize.define('User', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Win.associate = function (models) {
    Win.belongsTo(models.User)
  }
  return Win
}
