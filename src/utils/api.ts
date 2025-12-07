export const getBaseUrl = () => {
  if (process.env.VERCEL_ENV === 'production') {
    return 'https://coin-siren-test.vercel.app';
  }

  // Preview deployments: use the auto-generated Vercel URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Local dev
  return 'http://localhost:3000';
};
