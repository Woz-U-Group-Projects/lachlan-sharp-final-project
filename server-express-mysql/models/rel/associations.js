module.exports = (models) => {
    models.users.hasMany(models.blogposts, {foreignKey: 'iduser'});
    models.blogposts.belongsTo(models.users, {
        foreignKey: "iduser",
        targetKey: "iduser"
    } );
}
