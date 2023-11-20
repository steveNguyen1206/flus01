module.exports = (sequelize, Sequelize) => {
    const Project_post = sequelize.define("project_post", {
      title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      detail: {
        type:  Sequelize.STRING(512),
        allowNull: false
      },
      pushlish_time: {
        type:  Sequelize.DATEONLY
      },
      budget_min: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      budget_max: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        default: true
      },
      imgage_post_urls: {
        type: Sequelize.STRING(1024)
      }
    //   user_id: Reference to USER - OK
    //   img_id: Reference to IMAGE - OK
    });
  
    return Project_post;
  };
  