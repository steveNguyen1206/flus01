const db = require("../models");
const UserSubcategory = db.user_subcategory;
const Subcategory = db.subcategories;
const Op = db.Sequelize.Op;

// retrieve all subcategory of a user by user id
exports.findAll = (req, res) => {
  const id = req.params.id;
    console.log("id ", id);

  UserSubcategory.findAll({
    where: {
        userId: id,
    },
    include: [
      {
        model: Subcategory,
        as: "subcategory",
        attributes: ["id", "subcategory_name", "categoryId"],
      },
    ],
  })
    .then((data) => {
      res.send(data);
      console.log("data ", data);
    })
    .catch((err) => {
      console.log(err);
    });
};
