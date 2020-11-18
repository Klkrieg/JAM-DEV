module.exports = {
  env: {
    NEXTAUTH_URL: process.env.VERCEL_URL || 'http://localhost:3000',
  },
};
