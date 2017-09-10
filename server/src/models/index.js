const fs = require('fs')
const path = require('path')
const Sequilize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequilize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

module.exports = db
