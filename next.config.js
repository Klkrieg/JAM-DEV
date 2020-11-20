module.exports = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.VERCEL_URL || 'http://localhost:3000',
    NEXTAUTH_URL: process.env.VERCEL_URL || 'http://localhost:3000',
  },
};
