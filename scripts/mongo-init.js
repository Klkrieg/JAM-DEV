// eslint-disable-next-line no-undef
db.createUser({
  user: 'user',
  pwd: 'password',
  roles: [
    {
      role: 'readWrite',
      db: 'jam-db',
    },
  ],
});
