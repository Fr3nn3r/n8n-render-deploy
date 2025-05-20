process.env.DB_TYPE = 'postgresdb';
process.env.DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED = 'false';
process.env.DB_POSTGRESDB_SSL = JSON.stringify({ rejectUnauthorized: false });

console.log('📡 Connecting to DB with:');
console.log({
  DB_HOST: process.env.DB_POSTGRESDB_HOST,
  DB_PORT: process.env.DB_POSTGRESDB_PORT,
  DB_NAME: process.env.DB_POSTGRESDB_DATABASE,
  DB_USER: process.env.DB_POSTGRESDB_USER,
  SSL: process.env.DB_POSTGRESDB_SSL,
});

require('./packages/cli/bin/n8n');

