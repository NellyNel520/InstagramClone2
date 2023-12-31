'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Post extends Model {
		static associate(models) {
			Post.belongsTo(models.User, {
				foreignKey: 'userId',
			})
			Post.hasMany(models.Comment, {
				foreignKey: 'postId',
			})
		}
	}
	Post.init(
		{
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id',
				},
			},
			caption: DataTypes.TEXT,
			likeCount: DataTypes.INTEGER,
			likes_by_users: [DataTypes.STRING],
			image: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Post',
			tableName: 'posts',
		}
	)
	return Post
}
