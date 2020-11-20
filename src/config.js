export const config = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isStaging: process.env.NODE_ENV === 'staging',
  isProduction: process.env.NODE_ENV === 'production',
  isPreview: process.env.PREVIEW_DEPLOYMENT === 'true',
};
