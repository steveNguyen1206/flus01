module.exports = (sequelize, Sequelize) => {
    const Issue = sequelize.define("issue", {
      content: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      
    });
  
    return Issue;
  };
  