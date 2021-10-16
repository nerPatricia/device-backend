module.exports = (sequelize, DataTypes) => {
    const Device = sequelize.define('Device', {
        id: {
            type: DataTypes.STRING
        },
	categoryId: {
	    type: DataTypes.INTEGER	
	},
	color: {
            type: DataTypes.STRING	
	},
	partNumber: {
            type: DataTypes.INTEGER
	}
    });
    Device.associate = (models) => {
        // associations can be defined here
        Device.belongsTo(models.Category, {
            foreignKey: 'categoryId',
            targetKey: 'id',
        });
    };

    return Device;
}
