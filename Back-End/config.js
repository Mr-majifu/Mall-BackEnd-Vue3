const config = {
  port: process.env.PORT || 3000, // 端口号
  db: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/myapp', // MongoDB连接字符串
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  },
  jwtSecret: process.env.JWT_SECRET || 'secret-key', // JWT密钥
  // apiKeys: {
  //   google: process.env.GOOGLE_API_KEY || 'google-api-key',
  //   facebook: process.env.FACEBOOK_API_KEY || 'facebook-api-key',
  // },
  // email: {
  //   smtp: {
  //     host: 'smtp.gmail.com',
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: process.env.EMAIL_USER || 'user@gmail.com',
  //       pass: process.env.EMAIL_PASSWORD || 'password',
  //     },
  //   },
  //   from: process.env.EMAIL_FROM || 'MyApp <no-reply@myapp.com>',
  // },
};

export default config;