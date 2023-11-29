module.exports = (sequelize, Sequelize) => {
    const Transactions = sequelize.define("transaction", {
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      
    });
  
    return Transactions;
  };
  