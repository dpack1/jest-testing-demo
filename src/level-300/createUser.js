// src/level-300/user.js (Add the new function)
const createUser = (user, db) => {
    if (!user || !user.name) {
      throw new Error('User name is required');
    }
    return db.saveUser(user); //SaveUser returns true if user has ID and Username
  };
  
  module.exports = {createUser};
  