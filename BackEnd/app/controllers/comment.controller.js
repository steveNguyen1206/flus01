const db = require("../models");
const comment = db.comment_proj;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  console.log(req.body)
    // Validate request
    if (!req.body.comment) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // create a comment
    const Comment = {
      comment: req.body.comment,
      proj_post_id: req.body.proj_post_id,
      user_id: req.body.user_id,
      parent_id: req.body.parent_id,
    }

    // Save comment in the database
    comment.create(Comment)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Some error occurred while creating the comment." });
      });
};

// Find a single comment with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    comment.findByPk(id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({ message: "Not found comment with id " + id });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error retrieving comment with id=" + id });
      });
  };

exports.findCommentByProjectId = (req, res) => {
    const project_id = req.params.project_id;

    console.log(project_id)

    
    comment.findAll({ where: { proj_post_id: project_id, parent_id: null } })
    .then((data) => {
        if (data.length > 0) {
            Promise.all(data.map((parentComment) => {
                return comment.findAll({ where: { proj_post_id: project_id, parent_id: parentComment.id } })
                    .then((childComments) => {
                        parentComment.dataValues.childComments = childComments;
                    });
            }))
            .then(() => {
                res.send(data);
            })
            .catch((err) => {
                res.status(500).send({ message: "Error retrieving child comments" });
            });
        } else {
          // empty array, no error
          res.send(data);
        }
    })
    .catch((err) => {
      console.log(err)
        res.status(500).send({ message: "Error retrieving comment with project_id=" + project_id });
    });
  }


// Find all comment by user_id
exports.findCommentByUserId = (req, res) => {
    const user_id = req.params.user_id;
  
    comment.findAll({ where: { user_id: user_id } })
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({ message: "Not found comment with user_id " + user_id });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error retrieving comment with user_id=" + user_id });
      });
  };


// Delete a comment with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    comment.destroy({ where: { id: id } })
      .then((data) => {
        if (data) {
          res.send({ message: "comment was deleted successfully!" });
        } else {
          res.status(404).send({ message: "Not found comment with id " + id });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Could not delete comment with id=" + id });
      });
  };
