'use strict'

module.exports = (sequelize, DataTypes) => {
    const CitySpeed = sequelize.define('CitySpeed', {
        aegis_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        create_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            primaryKey: true
        },
        city_speed: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        city_status: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        city_distribution: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, {
        timestamps: false
    });
    return CitySpeed;
}