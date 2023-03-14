
// 直接和数据库打交道

import User from '../models/user.js'

const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

// export const getUserById = async (userId) => {
//   const user = await User.findById(userId);
//   return user;
// };

// export const updateUser = async (userId, userData) => {
//   const user = await User.findByIdAndUpdate(userId, userData, { new: true });
//   return user;
// };

// export const deleteUser = async (userId) => {
//   await User.findByIdAndDelete(userId);
// };

// export const getUserByEmail = async (email) => {
//   const user = await User.findOne({ email });
//   return user;
// };


export default  {
  createUser,
}
