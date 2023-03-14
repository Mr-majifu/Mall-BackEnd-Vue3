
import mongoose from 'mongoose'

export default function connectDB() {
  mongoose.connect('mongodb://127.0.0.1:27017/mall-vue3', {
  // useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, '连接 MongoDB 数据库失败：'));
db.once('open', () => {
  console.log('连接 MongoDB 数据库成功！');
});
} 