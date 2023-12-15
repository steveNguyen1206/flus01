module.exports = (sequelize, Sequelize) => {
    const OTP = sequelize.define("otp", {
      code: {
        type: Sequelize.STRING(6),
        allowNull: false
      },
      phone_number: {
        type: Sequelize.STRING(12),
        allowNull: false,
        unique: true
      }
    });
  
    return OTP;
  };
  