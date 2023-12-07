module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      account_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      }, 
      password: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      profile_name: {
        type: Sequelize.STRING(50)
      },	
      phone_number: {
<<<<<<< HEAD
        type: Sequelize.STRING(15)
=======
        type: Sequelize.INTEGER,
        allowNull: false
>>>>>>> 0581da680bc9d6f9adf2982955bdf7e4b982a114
      },
      nationality: {
        type: Sequelize.STRING(50)
      },
      user_type: {
        type: Sequelize.TINYINT
<<<<<<< HEAD
        // 1: user
        // 2: admin
=======
>>>>>>> 0581da680bc9d6f9adf2982955bdf7e4b982a114
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
  