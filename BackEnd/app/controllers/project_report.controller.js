const { where } = require("sequelize");
const db = require("../models");
const Project = db.projects;
const Op = db.Sequelize.Op;
const User = db.Sequelize.user;
const projectReport = db.projects_reports;


// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.message || !req.body.resources ) {
    res.status(400).send({
      message: "Missing information!"
    });
    return;
  }

  const projectId = req.params.id;
  const project_report = {
    message: req.body.message,
    resources: req.body.resources,
    status: 0,
    project_id: projectId
  };

//   console.log(req.body);

  // Save Tutorial in the database
  projectReport.create(project_report)
    .then(report_data => {
          res.send(report_data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Project."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    projectReport.findOne({
        where: {project_id: id}
    })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(400).send({
            message: `This project havent had a report yet. contact your freelancer for more information.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving project report with project id=" + id
        });
      });
  };


// Update a project by the id in the request
exports.update = async (req, res) => {
  const id = req.body.id;

  const update = {
  message: req.body.message,
  resources: req.body.resources,
  status: req.body.status,
  };

  projectReport.update(update, {where: {project_id: id}})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating project report with project id=" + id
        });
    })
    
};

// Update a project by the id in the request
exports.accept = async (req, res) => {
  const id = req.params.id;
  const update = {
  status: 1,
  };

  projectReport.update(update, {where: {project_id: id}})
    .then(data => {
      if(data ==1)
      {
        const project_update = {status: 3};
        Project.update(project_update,  {where: {id: id}})
        .then(p_data=>{
          if(p_data ==1)
            res.send({message: "Report have been accepted. Project is finished!"});
          else 
            res.status(500).send({message: "Some error happend when updating project."})
        })
        .catch(p_error=>{
          res.status(500).send({p_error});
        })
      }
      else res.status(500).send({message: "Some error happend when updating report."});
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating project report with project id=" + id 
        });
    })
    
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};


