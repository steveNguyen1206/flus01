module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
        project_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      project_description: {
        type: Sequelize.STRING(512),
        allowNull: false
      },

      start_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      budget: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      
    });
  
    return Project;
  };
  