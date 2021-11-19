module.exports = (sequelize, dataTypes) => {

    const alias = 'Comentario';

    const columnas = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        comentario: {
            type: dataTypes.STRING
        }
    };

    const configuracionTabla = {
        tableName: "comentarios",
        timestamps: true,
        underscorded: true
    };

    let Comentario = sequelize.define(alias,columnas,configuracionTabla);

    Comentario.associate = (models) => {
        Comentario.belongsTo(models.Posteo, {
            as: 'posteo_comentario',
            foreignKey: 'posteoId'
        }),
        Comentario.belongsTo(models.Usuario, {
            as: 'usuario_comentario',
            foreignKey: 'usuarioId'
        })
    }

    return Comentario;
}