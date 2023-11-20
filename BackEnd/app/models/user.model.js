module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      account_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      }, 
      password: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      profile_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },	
      phone_number: {
        type: Sequelize.INTEGER
      },
      nationality: {
        type: Sequelize.STRING(50)
      },
      user_type: {
        type: Sequelize.BOOLEAN
      },	
      email: {
        type: Sequelize.STRING()
      },
      avt_url: {
        type: Sequelize.STRING(256)
      },
      social_link: {
        type: Sequelize.STRING(512)
      },
    });
  
    return User;
  };
  