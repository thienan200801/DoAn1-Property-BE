export default () => ({
  dbURI: process.env.DATABASE_URL,
  jwt_secret: process.env.JWT_SECRET,
  port: process.env.PORT,
});
