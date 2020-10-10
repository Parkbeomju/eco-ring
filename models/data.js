const Sequelize = require('sequelize');

module.exports = class Data extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            data_idx: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            temperature: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            humidity: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            ultra_fine_dust: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            status: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            measurement_time: {
                type: Sequelize.DATEONLY,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            }
        }, {
            sequelize,
            timestamps: false,
            tableName: 'datas',
            modelName: 'Data',
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });
    }

    static associate(db) {}
}
