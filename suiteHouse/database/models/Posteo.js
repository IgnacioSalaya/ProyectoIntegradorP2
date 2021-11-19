module.exports = (sequelize, dataTypes) => {

    const alias = 'Posteo';

    const columnas = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        imagenPosteo: {
            type: dataTypes.STRING
        },
        piePublicacion: {
            type: dataTypes.STRING
        }
    };

    const configuracionTabla = {
        tableName: "posteos",
        timestamps: true,
        underscorded: true
    };

    let Posteo = sequelize.define(alias,columnas,configuracionTabla);

    Posteo.associate = function(models) {
        Posteo.belongsTo(models.Usuario, {
            as: 'usuario_posteo',
            foreignKey: 'usuarioId'
        }),
        Posteo.hasMany(models.Comentario, {
            as: 'comentarios_posteo',
            foreignKey: 'posteoId'
        })
    }

    return Posteo;
}