module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define("image", {
      image_url: {
        type: Sequelize.STRING(256),
        allowNull: false
      }
    });
  
    return Image;
  };
  