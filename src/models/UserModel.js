module.exports = function (sequelize, DataTypes) {
    const UserModel = sequelize.define('users', {
        use_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        use_name: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        use_email: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        use_status: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        created: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'users',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            }
        ]
    });

    return UserModel

};
