const db = require("../models");
const Category = db.categories;
const Subcategory = db.subcategories;
const Op = db.Sequelize.Op;

// Create and Save a new Category
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Category
  const category = {
    name: req.body.name,
  };
  console.log(category);
  // Save Category in the database
  Category.create(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category.",
      });
    });
};

// Retrieve all Category from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Category.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Category with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Category.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

// Update a Category by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Category.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Category with id=" + id,
      });
    });
};

// Delete a Category with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Category.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Category with id=" + id,
      });
    });
};

// Retrieve all Categories with their Subcategories from the database.
exports.findAllCategoryInfo = (req, res) => {
  const {searchKey} = req.params;

  console.log("############################ search key: " + searchKey);
  
  Category.findAll({
    where:{
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${searchKey}%`,
          },
        },
        {
          '$subcategories.subcategory_name$': {
            [Op.like]: `%${searchKey}%`,
          },
        },
      ],
    },
    include: [
      {
        model: Subcategory,
        as: 'subcategories',
        attributes: ['id', 'subcategory_name'],
        require: false
      },
    ],
  })
    .then((data) => {
    //   Example result 
    //   [
    //     {
    //         "id": 1,
    //         "name": "Cate 1",
    //         "createdAt": "2023-12-16T04:50:57.000Z",
    //         "updatedAt": "2023-12-16T04:50:57.000Z",
    //         "subcategories": [
    //             {
    //                 "id": 3,
    //                 "subcategory_name": "subcat 3"
    //             },
    //             {
    //                 "id": 2,
    //                 "subcategory_name": "subcat 2"
    //             },
    //             {
    //                 "id": 1,
    //                 "subcategory_name": "subcat 1"
    //             }
    //         ]
    //     },
    //     {
    //         "id": 2,
    //         "name": "Cate 2",
    //         "createdAt": "2023-12-16T04:51:01.000Z",
    //         "updatedAt": "2023-12-16T04:51:01.000Z",
    //         "subcategories": [
    //             {
    //                 "id": 5,
    //                 "subcategory_name": "subcat 5"
    //             },
    //             {
    //                 "id": 4,
    //                 "subcategory_name": "subcat 4"
    //             }
    //         ]
    //     }
    // ]
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
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
