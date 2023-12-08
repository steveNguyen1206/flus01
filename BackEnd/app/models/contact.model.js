module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
      job_name: {
        type: Sequelize.STRING(50)
      },
      job_description: {
        type:  Sequelize.STRING(512)
      },
      start_date: {
        type:  Sequelize.DATEONLY
      },
      end_date: {
        type: Sequelize.DATEONLY
      },
      budget: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Contact;
  };
  