const db = require("../models");
const User = db.user;
const Subcategory = db.subcategories;
const UserSubcategory = db.user_subcategory;
const Op = db.Sequelize.Op;

// add a subcategory to a user by user id and subcategory id
exports.create = (req, res) => {
  console.log("======== ADD A SUBCATEGORY TO A USER =========");
  console.log("USER: " + req.body.userId);
  console.log("SUBCATEGORY" + req.body.subcategoryId);

  // Validate request
  if (!req.body.subcategoryId || !req.body.userId) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a UserSubcategory
  const userSubcategory = {
    userId: req.body.userId,
    subcategoryId: req.body.subcategoryId,
  };

  // Save UserSubcategory in the database
  UserSubcategory.create(userSubcategory)
    .then((data) => {
      res.send(data);
      console.log("data ", data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// retrieve all subcategory of a user by user id
exports.findAll = (req, res) => {
  console.log("======== GET ALL TAGS OF A USER =========");
  const id = req.params.id;

  console.log("id: ", id);
  
  User.findByPk(id, {
    include: Subcategory, // Include the associated Subcategory model
  })
    .then((user) => {
      if (user) {
        const subcategories = user.subcategories;
        console.log(subcategories);
        // Process the retrieved subcategories
      } else {
        // User with the given ID not found
        console.log("User with the given ID not found");
      }
    })
    .catch((error) => {
      // Handle any errors
      console.log(error);
    });
};

// delete a subcategory of a user by user id and subcategory id
exports.delete = (req, res) => {
  console.log("======== DELETE A SUBCATEGORY OF A USER =========");
  const userId = req.params.userId;
  const subcategoryId = req.params.subcategoryId;
  console.log("userId: ", userId);
  console.log("subcategoryId: ", subcategoryId);
  console.log("req.params: ", req.params);

  UserSubcategory.destroy({
    where: {
      userId: userId,
      subcategoryId: subcategoryId,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Subcategory was deleted successfully!",
        });
      } else {
        res.send({
          message: "Could not delete UserSubcategory " + subcategoryId + " of user" + userId + ". Maybe UserSubcategory was not found!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete UserSubcategory " + subcategoryId + " of user" + userId,
      });
    });
};