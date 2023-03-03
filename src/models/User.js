module.exports = (sequelize, DataTypes) => {
    const UsersModel = sequelize.define('User', {
      id: DataTypes.INTEGER,
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      tableName: 'users',
      underscored: false,
      timestamps: false,
    },
    );
    UsersModel.associate = (models) => {
        UsersModel.belongsTo(models.blog_posts, {
        foreignKey: 'idBlog_posts',
        as: 'blog_posts',
      });
    };
    return UsersModel;
  };
  
