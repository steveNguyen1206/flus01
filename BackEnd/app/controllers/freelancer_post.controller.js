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