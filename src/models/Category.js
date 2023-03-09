module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    },
    );
    // Category.associate = (models) => {
    //   Category.hasMany(models.PostCategory, {
    //     foreignKey: 'id',
    //     as: 'PostCategories',
    //   });
    // };
    return Category;
  };
  