export const config = {
  ACCESS_TOKEN_KEY: '__ACCESS_TOKEN__',
  REFRESH_TOKEN_KEY: '__REFRESH_TOKEN__',

  API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://linking-bio.rj.r.appspot.com',
  // API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3010',

  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000',
}
