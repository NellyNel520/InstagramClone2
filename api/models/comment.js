'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Comment.belongsTo(models.User, {
				foreignKey: 'userId',
			})
			Comment.belongsTo(models.Post, {
				foreignKey: 'postId',
			})
		}
	}
	Comment.init(
		{
			content: DataTypes.TEXT,
			usersId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				field: 'userId',
				onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id',
				},
			},
			postId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
				references: {
					model: 'posts',
					key: 'id',
				},
			},
			likeCount: DataTypes.INTEGER,
			likes_by_users: [DataTypes.STRING],
		},
		{
			sequelize,
			modelName: 'Comment',
		}
	)
	return Comment
}
