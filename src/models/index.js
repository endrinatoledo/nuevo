'use strict'

// const Sequelize = require('sequelize')
const { Sequelize, DataTypes } = require('sequelize')


const usersModel = require('./UserModel')
//  sequelize

// console.log('process.env.DB_NAME', process.env.DB_NAME)
// console.log('process.env.DB_USER', process.env.DB_USER)

// console.log('process.env.DB_PASSWORD', process.env.DB_PASSWORD)

// console.log('process.env.DB_HOST', process.env.DB_HOST)

// console.log('process.env.DB_PORT', process.env.DB_PORT)

let sequelize = new Sequelize('dbtest', 'user_test', '123456',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    "logging": console.log,
    dialectOptions: {
      charset: 'utf8',
      dateStrings: true,
      typeCast: true

    }

  })

sequelize.authenticate()
  .then(() => {
    console.log('connected..')
  })
  .catch(err => {
    console.log('Error....' + err)
  })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// const Case = CaseModel(sequelize, Sequelize);
db.usersModel = usersModel(sequelize, DataTypes);
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
//    
db.sequelize.sync({ alter: false }).then(() => {
  // console.log('yes re-sync done!') 
})

module.exports = db
// 'use strict'
// const { Sequelize, DataTypes } = require('sequelize')

// const fs = require('fs')
// const path = require('path')
// // const Sequelize = require('sequelize')
// const basename = path.basename(__filename)
// const db = {}

// let sequelize

// sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: "mysql",
//     "operatorsAliases": false,
//     "logging": console.log,
//     dialectOptions: {
//       charset: 'utf8',
//       dateStrings: true,
//       typeCast: true

//     }

//   })

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
//     db[model.name] = model
//   })

// db.usersModel = require('./UserModel.js')(sequelize, DataTypes)


// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db)
//   }
// })

// db.sequelize = sequelize
// db.Sequelize = Sequelize

// module.exports = db