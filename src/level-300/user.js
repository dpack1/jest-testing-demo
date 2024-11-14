// src/level-300/user.js
const getUser = (userId, db) => {
    if (!userId) {
      throw new Error('User ID is required');
    }
    return db.getUserById(userId);
  };
  
  module.exports = { getUser };
  