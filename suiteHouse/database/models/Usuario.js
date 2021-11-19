module.exports = (sequelize, dataTypes) => {

    const alias = 'Usuario';

    const columnas = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombreUsuario: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        fecNac: {
            type: dataTypes.DATE
        },
        email: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        imagenPerfil: {
            type: dataTypes.STRING
        }
    };

    const configuracionTabla = {
        tableName: "usuarios",
        timestamps: true,
        underscorded: true
    };

    let Usuario = sequelize.define(alias,columnas,configuracionTabla);

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Posteo, {
            as: 'posteos_usuario',
            foreignKey: 'usuarioId'
        }),
        Usuario.hasMany(models.Comentario, {
            as: 'comentarios_usuario',
            foreignKey: 'usuarioId'
        })
    }

    return Usuario;
}