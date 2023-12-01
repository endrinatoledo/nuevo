const Sequelize = require('sequelize');
const CaseModel =  require('./app/models/zadmin_osticket/Case')

const sequelize = new Sequelize('bdTest','root','', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

// const Case = CaseModel(sequelize, Sequelize);

// sequelize.sync({force: false})
// .then(() => {
//     console.log('tablas sincronizadas')
// })

// module.exports = {
//     Case
// }