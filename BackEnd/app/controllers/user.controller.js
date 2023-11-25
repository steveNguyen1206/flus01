const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  console.log("Body: ", req.body)

  /*
  // Validate request
  if (!req.body.account_name) {
    res.status(400).send({
      message: "Account name can not be empty!",
    });
    return;
  }

  const user = {
    account_name: req.body.account_name,
    // password: req.body.password,
    profile_name: req.body.profile_name,
    phone_number: req.body.phone_number,
    nationality: req.body.nationality,
    user_type: req.body.user_type,
    email: req.body.email,
    avt_url: req.body.avt_url,
    social_link: req.body.social_link
  }

  // Save User in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
    */
};

// Retrieve all User from the database
exports.findAll = (req, res) => {
  Tutorial.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.findAllbyProfileName = (req, res) => {};

// Find a single User with an id
exports.findOnebyId = (req, res) => {};

exports.findOnebyAccountName = (req, res) => {};

// Update a User by the id in the request
exports.update = (req, res) => {};
