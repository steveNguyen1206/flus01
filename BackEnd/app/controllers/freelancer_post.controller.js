const db = require("../models");
const freelancer_post = db.freelancer_post;
const Op = db.Sequelize.Op;

// Create and Save a new Freelancer_post
exports.createFreelancerPost = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    // Create a Freelancer_post
    const freelancerPost = {
        about_me: req.body.about_me,
        skill_description: req.body.skill_description,
        lowset_price: req.body.lowset_price,
        delivery_due: req.body.delivery_due,
        revision_number: req.body.revision_number,
        delivery_description: req.body.delivery_description,
        imgage_post_urls: req.body.imgage_post_urls,
        skill_tag: req.body.skill_tag,
        freelancer_id: req.body.freelancer_id
    };

    // Save Freelancer_post in the database
    freelancer_post.create(freelancerPost)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Freelancer_post."
        });
        });
};

// Find all Freelancer_posts by user id and change their status
exports.findAndChangeStatus = (req, res) => {
    const { userId, status } = req.params;
    const condition = userId ? { freelancer_id: { [Op.eq]: `${userId}` } } : null;

    freelancer_post.update({ status: status }, { where: condition })
        .then(num => {
            if (num > 0) {
                res.send({
                    message: "Status of Freelancer_posts was updated successfully."
                });
            } else {
                res.send({
                    message: `No Freelancer_posts found for user id=${userId}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating status of Freelancer_posts for user id=" + userId
            });
        });
};

// Retrieve all Freelancer_posts from the database.
exports.findAllFreelancerPosts = (req, res) => {
    const {userId} = req.params;
    const condition = userId ? { freelancer_id: { [Op.eq]: `${userId}` } } : null;

    freelancer_post.findAll({ where: condition })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving freelancer_posts."
        });
        });
};

// change status of many freelancer_posts by list of freelancer_post_id
exports.changeStatus = (req, res) => {
    const { freelancer_post_id_list, status } = req.body;
    const condition = freelancer_post_id_list ? { freelancer_post_id: { [Op.in]: `${freelancer_post_id_list}` } } : null;
    freelancer_post.update({ status: status }, { where: condition })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Freelancer_post was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Freelancer_post with id=${freelancer_post_id}. Maybe Freelancer_post was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating Freelancer_post with id=" + freelancer_post_id
            });
        });
};

// Create and Save a new Freelancer_post
exports.create = (req, res) => {
    // Validate request
    console.log("Meof meos meo meof meo");
    if (!req.body.freelancer_id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    console.log(req.body.freelancer_id);
    // Create a freelancer_post
    const freelancer_post = {
        freelancer_id: req.body.freelancer_id,
        about_me: req.body.about_me,
        skill_description: req.body.skill_description,
        lowset_price: req.body.lowset_price,
        delivery_due: req.body.delivery_due,
        revision_number: req.body.revision_number,
        delivery_description: req.body.delivery_description,
        imgage_post_urls: req.body.imgage_post_urls,
        skill: req.body.skill
    };
    // console.log(category);
    // Save Freelancer_post in the database
    Freelancer_post.create(freelancer_post)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all Freelancer_post from the database.
exports.findAll = (req, res) => {
    const freelancer_id = req.query.freelancer_id;
    var condition = freelancer_id ? { freelancer_id: { [Op.like]: `%${freelancer_id}%` } } : null;

    Freelancer_post.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Freelancer_post with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Freelancer_post.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Freelancer_post with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Freelancer_post with id=" + id
            });
        });
};

// Update a Category by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Freelancer_post.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Freelancer_post was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Freelancer_post with id=${id}. Maybe Freelancer_post was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Freelancer_post with id=" + id
            });
        });
};

// Delete a Category with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Freelancer_post.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Freelancer_post was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Freelancer_post with id=${id}. Maybe Freelancer_post was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Freelancer_post with id=" + id
            });
        });
};

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//     Category.destroy({
//         where: {},
//         truncate: false
//     })
//         .then(nums => {
//             res.send({ message: `${nums} Category were deleted successfully!` });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing all categories."
//             });
//         });
// };
