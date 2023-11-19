module.exports = (sequelize, Sequelize) => {
    const Bid = sequelize.define("bid", {
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      message: {
        type:  Sequelize.STRING(512)
      },
      duration: {
        type:  Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN
      }
    //   user_id: Reference to USER - OK
    //   proj_post_id: Reference to PROJECT_POST - OK
    });
  
    return Bid;
  };
  