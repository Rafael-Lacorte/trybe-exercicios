module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        message: DataTypes.STRING,
        upvoting: DataTypes.INTEGER,
        downvoting: DataTypes.INTEGER,
        accountId: { type: DataTypes.INTEGER, foreignKey: true }
    })

    Comment.associate = (models) => {
        Comment.belongsTo(models.Account, {
          foreignKey: 'id', 
          as: 'account'
        });
    };

    return Comment
}