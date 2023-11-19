module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      account_name: {
        type: Sequelize.STRING(50)
      }
    });
  
    return User;
  };
  