module.exports = (sequelize, Sequelize) => {
    const Image_freelancer = sequelize.define("image_freelancer", {
      image_url: {
        type: Sequelize.STRING(256)
      }
    });
  
    return Image_freelancer;
  };
  