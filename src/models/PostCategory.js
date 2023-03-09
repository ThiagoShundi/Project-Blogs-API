module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
      categoryId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    },
    );
    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'categoryId',
        otherKey: 'postId',
        as: 'blogPosts',
        through: PostCategory,
      }),
        models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories',
        through: PostCategory,
      })
    };

    return PostCategory;
  };
