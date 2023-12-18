const db = require("../models");
const project_post = db.project_post;
const Op = db.Sequelize.Op;

// Create and Save a new Project_post
exports.createProjectPost = (req, res) => {
    console.log("body: ",req.body);
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    // Create a Project_post
    const projectPost = {
        title: req.body.title,
        detail: req.body.detail,
        budget_min: req.body.budget_min,
        budget_max: req.body.budget_max,
        imgage_post_urls: "https://i.imgur.com/lf1OweZ.png",
        user_id: req.body.user_id,
        tag_id: 1,
    };
   
    // Save Project_post in the database
    project_post.create(projectPost)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Project_post."
        });
        });
};

// Retrieve all Project_posts from the database.
exports.findAllProjectPosts = (req, res) => {
    const {userId} = req.params;
    const condition = userId ? { user_id: { [Op.eq]: `${userId}` } } : null;

    project_post.findAll({ where: condition })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving project_posts."
        });
        });
};

// change status of many project_posts by list of project_post_id
exports.changeStatus = (req, res) => {
    const { project_post_id_list, status } = req.body;
    project_post.update({ status: status }, { where: { id: project_post_id_list } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "project_post was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update project_post with id=${id}. Maybe project_post was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating project_post with id=" + id
            });
        });
};


// get all project with status = 1
exports.findAll = (req, res) => {
    project_post.findAll({ where: { status: 1 } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving project_posts."
            });
        });
};

// get owner project `/project_post/owner/${id}`
exports.findOwnerProject = (req, res) => {
    const { id } = req.params;
    project_post.findAll({ where: { user_id: id } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving project_posts."
            });
        });
};

// `/project_post/${id}`
exports.findOne = (req, res) => {
    const id = req.params.id;

    project_post.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                message: "project_post not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error retrieving project_post with id=" + id
            });
        });
};

// /project_post/update
exports.update = (req, res) => {
    const id = req.body.id;
    console.log(req.body);
  
    let preprocessData = req.body;
    preprocessData.budget_min = parseFloat(preprocessData.budget_min);
    preprocessData.budget_max = parseFloat(preprocessData.budget_max);
    preprocessData.tag_id = Number(preprocessData.tag_id);
    preprocessData.user_id = Number(preprocessData.user_id);
    preprocessData.tag_id = Number(preprocessData.tag_id);

    console.log(preprocessData);

    const updatedData = Object.keys(preprocessData)
      .filter(key => key !== 'id' && key !== 'image' && req.body[key])
      .reduce((obj, key) => {
        obj[key] = req.body[key];
        return obj;
      }, {});

    console.log("updated", updatedData);
  
    project_post.update(updatedData, {
      where: { id: id }
    })
      .then(num => {
        if (num[0] > 0) {
          res.send({
            message: "project_post was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update project_post with id=${id}. Maybe project_post was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        console.log(err);

        res.status(500).send({
          message: "Error updating project_post with id=" + id
        });
      });
  };
  