module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("Todo", {
        todo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Todo;
};
