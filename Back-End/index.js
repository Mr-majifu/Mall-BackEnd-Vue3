import app from './app.js';
import config from './config.js'
import userRoutes from './routes/userRoutes.js';

app.use('/users', userRoutes);

app.listen(config.port, () => {
  console.log('Server is running on port 3000');
});