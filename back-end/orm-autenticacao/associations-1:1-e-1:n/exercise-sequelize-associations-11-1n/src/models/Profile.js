module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true 
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        accountId: { type: DataTypes.INTEGER, foreignKey: true }
    })

    Profile.associate = (models) => {
        Profile.hasOne(models.Account,
            {foreignKey: 'accountId', as : 'account'})
    }

    return Profile
}