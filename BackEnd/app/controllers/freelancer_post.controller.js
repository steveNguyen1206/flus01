const db = require("../models");
const Freelancer_post = db.freelancer_post;
const User = db.user;
const Subcategory = db.subcategories;
const Op = db.Sequelize.Op;

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
        skill_tag: req.body.skill_tag
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
    const id = req.body.id;
    console.log("id: ", id)
    console.log("req.body: ", req.body)

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

exports.findAllPosts = (req, res) => {
    const freelancer_id = req.query.freelancer_id;
    var condition = freelancer_id ? { freelancer_id: { [Op.like]: `%${freelancer_id}%` } } : null;

    Freelancer_post.findAll({
        where: condition,
        include: [
            {
                model: User,
                attributes: ['id', 'account_name', 'profile_name', 'avt_url'],
            },
            {
                model: Subcategory,
                attributes: ['id', 'subcategory_name'],
            },
        ],

    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
};