/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogposts', {
    blog_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    academic: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lifestyle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    professional: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    opinion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    entertainment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    blogName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    blogContent: {
      type: DataTypes.STRING(5000),
      allowNull: true
    }
  }, {
    tableName: 'blogposts'
  });
};
