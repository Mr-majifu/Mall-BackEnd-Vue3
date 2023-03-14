import { Router } from 'express';
import { createUser } from '../controllers/userController.js'

const router = Router();

// 创建一个新的用户
router.post('/', (req, res, next) => {
  // 处理创建用户的逻辑
  createUser(req, res, next)
});

// 获取所有用户
router.get('/', (req, res) => {
  // 处理获取所有用户的逻辑
});

// 获取单个用户
router.get('/:id', (req, res) => {
  // 处理获取单个用户的逻辑
});

// 更新用户
router.put('/:id', (req, res) => {
  // 处理更新用户的逻辑
});

// 删除用户
router.delete('/:id', (req, res) => {
  // 处理删除用户的逻辑
});

// router.post('/login', (req, res) => {
//   login(res, req.body)
// })

// router.post('/register', (req, res) => {
//   register(res, req.body)
// })

// router.post('/putPassword', (req, res) => {
//   putPassword(res, req.body)
// })

export default router;