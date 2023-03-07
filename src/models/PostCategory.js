const BlogPost = require("./BlogPost");
const Category = require("./Category");

module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
      categoryId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    },
    );
    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'blogPosts',
        through: PostCategory,
      }),
        models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'categoryId',
        otherKey: 'postId',
        as: 'category',
        through: PostCategory,
      })
    };

    return PostCategory;
  };
