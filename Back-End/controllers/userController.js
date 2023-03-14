
import userService from '../services/userService.js'

// GET /users
export const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// // GET /users
// export const getUsers = async (req, res) => {
//   try {
//     const users = await User.find().select('-password');
//     res.status(200).json(users);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };

// GET /users/:id
// export const getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('-password');
//     if (!user) {
//       return res.status(404).json({ msg: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind === 'ObjectId') {
//       return res.status(404).json({ msg: 'User not found' });
//     }
//     res.status(500).send('Server Error');
//   }
// };

// // POST /users
// export const createUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ msg: 'User already exists' });
//     }
//     user = new User({ name, email, password });
//     await user.save();
//     res.status(201).json(user);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };

// // PUT /users/:id
// export const updateUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     let user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ msg: 'User not found' });
//     }
//     user.name = name;
//     user.email = email;
//     user.password = password;
//     await user.save();
//     res.status(200).json(user);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind === 'ObjectId') {
//       return res.status(404).json({ msg: 'User not found' });
//     }
//     res.status(500).send('Server Error');
//   }
// };

// // DELETE /users/:id
// export const deleteUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ msg: 'User not found' });
//     }
//     await user.remove();
//     res.status(200).json({ msg: 'User removed' });
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind === 'ObjectId') {
//       return res.status(404).json({ msg: 'User not found' });
//     }
//     res.status(500).send('Server Error');
//   }
// };
