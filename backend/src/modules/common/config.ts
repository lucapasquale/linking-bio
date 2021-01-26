export const config = () => ({
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3010,

  pgUri: process.env.PG_URI || 'postgres://linking_bio:password@localhost:5432/linking_bio',
  jwtSecret: process.env.JWT_SECRET,

  cloudinary: {
    cloudName: 'linkingbio',
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },

  mailjet: {
    username: process.env.MAILJET_USERNAME,
    password: process.env.MAILJET_PASSWORD,
  },
})
