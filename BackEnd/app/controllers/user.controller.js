const db = require("../models");
const cloudinary = require("../config/cloudinary.config");
const upload = require("../middleware/multer");
const multer = require("multer");
const User = db.user;
const Op = db.Sequelize.Op;

// Retrieve all User from the database
exports.findAll = (req, res) => {
  const profile_name = req.query.profile_name;
  var condition = profile_name ? { profile_name: { [Op.like]: `%${profile_name}%` } } : null;

  User.findAll({where : condition})
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

// Find a single User with an id
exports.findOnebyId = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

exports.findOnebyAccountName = (req, res) => {
  const account_name = req.params.account_name;
  var condition = account_name ? { account_name: { [Op.eq]: `${account_name}` } } : null;

  User.findOne({where: condition })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with account_name=${account_name}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with account_name=" + account_name
      });
    });
};

exports.findOnebyEmail = (req, res) => {
  const email = req.params.email;
  var condition = email ? { email: { [Op.eq]: `${email}` } } : null;

  User.findOne({where: condition })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with email=${email}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with email=${email}"
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

exports.updateAvatar = (req, res) => {
  const id = req.params.id;

  upload.single("avatar")(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred during file upload
      res.status(500).send({ message: "Multer error: " + err.message });
    } else if (err) {
      // An unknown error occurred during file upload
      res.status(500).send({ message: "Unknown error: " + err.message });
    } else {
      // File upload successful
      if (req.file) {
        // Upload the file to Cloudinary
        cloudinary.uploader.upload(req.file.path, (error, result) => {
          if (error) {
            // Error occurred during Cloudinary upload
            res.status(500).send({ message: "Cloudinary upload error: " + error.message });
          } else {
            // Cloudinary upload successful
            const avatarUrl = result.secure_url;

            // Update the user's avt_url field with the Cloudinary URL
            User.update({ avt_url: avatarUrl }, { where: { id: id } })
              .then(num => {
                if (num == 1) {
                  res.send({
                    message: "User avatar was updated successfully.",
                    avatarUrl: avatarUrl
                  });
                } else {
                  res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                  });
                }
              })
              .catch(err => {
                res.status(500).send({
                  message: "Error updating User with id=" + id
                });
              });
          }
        });
      } else {
        res.status(400).send({ message: "No file was uploaded." });
      }
    }
  });
};

// Delete a User with the specified account_name in the request
exports.deleteOnebyAccountName = (req, res) => {
  const { account_name } = req.body;
  if (!account_name) {
    res.status(400).send({
      message: "Account_name can not be empty!"
    });
    return;
  }

  var condition = { account_name: { [Op.eq]: `${account_name}` } };

  User.destroy({where: condition})
    .then(num => {
      if (num > 0) {
        res.send({
          message: `Deleted ${number} user(s) successfully!`
        });
      } else {
        res.send({
          message: `Cannot delete User with account_name=${account_name}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with account_name=" + account_name
      });
    });

  };

// Delete a User with greater or equal the specified reportedTimes in the request
exports.deleteOnebyReportedTimes = (req, res) => {
  const { reported_times } = req.body;

  if (!reported_times) {
    res.status(400).send({
      message: "Reported_times is invalid!"
    });
    return;
  }

  var condition = { reported_times: { [Op.gte]: `${reported_times}` } };

  User.destroy({where: condition})
    .then(num => {
      if (num > 0) {
        res.send({
          message: `Deleted ${num} user(s) successfully!`
        });
      } else {
        res.send({
          message: `Cannot delete User with reported_times >= ${reported_times}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with reported_times >= " + reported_times
      });
    });

  }
