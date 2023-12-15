const db = require("../models");
const project_post = db.project_post;
const Op = db.Sequelize.Op;

// Create and Save a new Project_post
exports.createProjectPost = (req, res) => {
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
        imgage_post_urls: req.body.imgage_post_urls,
        user_id: req.body.user_id,
        tag_id: req.body.tag_id
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

// Find all Project_posts by user id and set their status to status param
exports.findAndChangeStatus = (req, res) => {
    const { userId, status } = req.params;

    project_post.update({ status: status }, { where: { user_id: userId } })
        .then(num => {
            if (num > 0) {
                res.send({
                    message: "Project_posts status updated successfully."
                });
            } else {
                res.send({
                    message: `No Project_posts found for user with id=${userId}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Project_posts status for user with id=" + userId
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