module.exports = (sequelize, Sequelize) => {
    const Payment_account = sequelize.define("payment_account", {
      owner_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      }, 
      password: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      account_number: {
        type: Sequelize.INTEGER
      },
    });
  
    return Payment_account;
  };
  