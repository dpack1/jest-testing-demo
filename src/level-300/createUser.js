// src/level-300/user.js (Add the new function)
const createUser = (user, db) => {
    if (!user || !user.name) {
      throw new Error('User name is required');
    }
    return db.saveUser(user);
  };
  
  module.exports = { getUser, createUser };
  