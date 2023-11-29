module.exports = (sequelize, Sequelize) => {
    const Freelancer_post = sequelize.define("freelancer_post", {
      about_me: {
        type: Sequelize.STRING(512)
      },
      skill_description: {
        type:  Sequelize.STRING(512)
      },
      lowset_price: {
        type:  Sequelize.INTEGER
      },
      delivery_due: {
        type: Sequelize.INTEGER
      },
      revision_number: {
        type: Sequelize.INTEGER
      },
      delivery_description: {
        type: Sequelize.STRING(512)
      }
    });
  
    return Freelancer_post;
  };
  