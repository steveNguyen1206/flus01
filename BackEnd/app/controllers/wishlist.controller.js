const db = require("../models");
const Op = db.Sequelize.Op;
const user_wishlist = db.user_wishlist;


// const create = (userId, projectPostId) => {
//     return http.post(`/wishlist/${userId}/${projectPostId}`);
// }

exports.create = (req, res) => {
    // get user_id and project_post_id from req.params
    const { userId, projectPostId } = req.params;
    // create wishlist object
    const wishlist = {
        user_id: userId,
        project_post_id: projectPostId
    }
    // save wishlist to database
    user_wishlist.create(wishlist)
        .then(data => {
            res.status(200).send({
                message: "Create wishlist successfully."
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Wishlist."
            });
        });
    };

// delete
exports.delete = (req, res) => {
    // get user_id and project_post_id from req.params
    const { userId, projectPostId } = req.params;
    // create wishlist object
    const wishlist = {
        user_id: userId,
        project_post_id: projectPostId
    }
    // delete wishlist from database
    user_wishlist.destroy({ where: wishlist })
        .then(data => {
            res.status(200).send({
                message: "Delete wishlist successfully."
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while deleting the Wishlist."
            });
        });
    };

// find all wishlist by user id

exports.findAllWishlistByUserId = (req, res) => {
    const { userId } = req.params;
    const condition = userId ? { user_id: { [Op.eq]: `${userId}` } } : null;

    user_wishlist.findAll({ where: condition })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving wishlist."
        });
        });
};

// check is exising wishlist
exports.isExisted = (req, res) => {
    const { userId, projectPostId } = req.params;
    const condition = userId ? { user_id: { [Op.eq]: `${userId}` }, project_post_id: { [Op.eq]: `${projectPostId}` } } : null;

    user_wishlist.findAll({ where: condition })
        .then(data => {
        res.send(data.length > 0 ? true : false);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving wishlist."
        });
        });
};