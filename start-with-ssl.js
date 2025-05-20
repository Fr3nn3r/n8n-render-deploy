process.env.DB_TYPE = 'postgresdb';
process.env.DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED = 'false';

// Add default fallback for older environments
if (!process.env.DB_POSTGRESDB_SSL) {
  process.env.DB_POSTGRESDB_SSL = JSON.stringify({ rejectUnauthorized: false });
}

require('./packages/cli/bin/n8n');
