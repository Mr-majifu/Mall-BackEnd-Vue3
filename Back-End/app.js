
import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 中间件
app.all('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-type', 'text/html;charset=utf8')
  if (req.url === '/favicon.ico') {
    res.send('')
    return
  }
  next()
})



export default app;