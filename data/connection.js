// importing library
const knex = require('knex')

// importing files
const knexfile = require('../knexfile')

// applying the development configuration
const knexConfig = knexfile.development

// exporting module
module.exports = knex(knexConfig)