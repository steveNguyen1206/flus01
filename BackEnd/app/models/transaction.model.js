module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transaction", {
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      
    });
  
    return Transaction;
  };
  