const db = require("../models");
const User = db.user;
const Subcategory = db.subcategories;
const Op = db.Sequelize.Op;

// retrieve all subcategory of a user by user id
exports.findAll = (req, res) => {
  console.log("======== GET ALL TAGS OF A USER =========");
  const id = req.params.id;

  // console.log("User & Sub: " + UserSubcategory);
  // console.log("Sub: " + Subcategory);

  User.findAll({
    where: {
        id: id,
    },
    include: Subcategory,
    // [
    //   {
    //     model: Subcategory,
    //     as: "subcategory",
    //     attributes: ["id", "subcategory_name", "categoryId"],
    //   },
    // ],
  })
    .then((data) => {
      res.send(data);
      console.log("data ", data);
    })
    .catch((err) => {
      console.log(err);
    });
};
