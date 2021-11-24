module.exports = (sequelize, dataTypes) => {

    const alias = 'Comentario';

    /* Columnas de la tabla */
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
        timestamps: true,           // Setea que tenemos createdAt y updatedAt
        underscorded: true          // Campos con _ en lugar de camellCase
    };

    /* Método define --> asignaciones */
    let Comentario = sequelize.define(alias,columnas,configuracionTabla);

    /* Claves foráneas */
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

    return Comentario; // Retorna las asignaciones
}