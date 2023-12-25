module.exports = (sequelize, Sequelize) => {
    const UserWishlist = sequelize.define("user_wishlist", {
      // user_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false
      // },
      // project_post_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false
      // }
      
    });
    return UserWishlist;
  };


  