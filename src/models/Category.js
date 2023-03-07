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
    // UsersModel.associate = (models) => {
    //     UsersModel.belongsTo(models.blog_posts, {
    //     foreignKey: 'idBlog_posts',
    //     as: 'blog_posts',
    //   });
    // };
    return Category;
  };
  