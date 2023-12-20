const db = require("../models");
const Transaction = db.transactions;
const Op = db.Sequelize.Op;

// Create and Save a new Transaction
// `http://localhost:8080/api/transaction`
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Thực hiện create project trước với các giá trị mặc định như sau:
    // project_name: ""
    // project_description: ""
    // start_date: ""
    // end_date: ""
    // budget: 0
    // status: 0
    // client_id: 0
    // freelancer_id: 0
  // Thực hiện create transaction và lấy thông tin project_id vừa tạo
  // Thực hiện update project với thông tin từ bảng transaction

  // Create a Transaction
  const transaction = {
    amount: req.body.amount,
    type: req.body.type,
    sender_id: req.body.sender_id,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    receiver_id: req.body.receiver_id,
    project_id: req.body.project_id
  };
  console.log("mèo méo meo mèo meo")
  // Save Tutorial in the database
  Transaction.create(transaction)
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

// Retrieve all Tutorials from the database.
// `http://localhost:8080/api/transaction`
exports.findAll = (req, res) => {
  const amount = req.query.amount;
  var condition = amount ? { amount: { [Op.like]: `%${amount}%` } } : null;

  Transaction.findAll({ where: condition })
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

// Find a single Tutorial with an id
// `http://localhost:8080/api/transaction/${id}`
exports.findOne = (req, res) => {
  const id = req.params.id;

  Transaction.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Transaction by the id in the request
// `http://localhost:8080/api/transaction/${id}`
exports.update = (req, res) => {
  const id = req.params.id;

  // Transaction.update(req.body, {
  //   where: { id: id }
  // })
  //   .then(num => {
  //     if (num == 1) {
  //       res.send({
  //         message: "Tutorial was updated successfully."
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Error updating Tutorial with id=" + id
  //     });
  //   });

  const num = Transaction.update(req.body, {
    where: { id: id }
  })

  if (num == 1) {
    res.send({
      message: "Tutorial was updated successfully."
    });
  }
  else {
    res.send({
      message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
    });
  }
};

// Delete a Tutorial with the specified id in the request
// `http://localhost:8080/api/transaction/${id}`
exports.delete = (req, res) => {
  const id = req.params.id;

  Transaction.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
//`http://localhost:8080/api/transaction`
exports.deleteAll = (req, res) => {
  Transaction.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// find all published Tutorial
// exports.findAllPublished = (req, res) => {
//   Transaction.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };
