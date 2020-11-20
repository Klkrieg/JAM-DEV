process.env.DB_CONN_STRING =
  process.env.DB_CONN_STRING ||
  'mongodb://root:password@localhost:27018/admin?retryWrites=true&w=majority';
