module.exports = {
  database: {
    database: process.env.DB_NAME || 'pinterest-clone',
    username: process.env.DB_USER || 'pinterest-clone',
    password: process.env.DB_PASSWORD || 'pinterest-clone',
    options: {
      dialect: process.env.DB_DIALECT || 'sqlite',
      storage: './pinterest-clone.sqlite'
    }
  }
}
