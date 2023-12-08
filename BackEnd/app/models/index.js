const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.categories = require("./category.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.freelancer_post = require("./freelancer_post.model.js")(sequelize, Sequelize);
db.image_freelancer = require("./image_freelancer.model.js")(sequelize, Sequelize);
db.contact = require("./contact.model.js")(sequelize, Sequelize);
db.subcategories = require("./subcategory.model.js")(sequelize, Sequelize);
db.bid = require("./Bid.model.js")(sequelize, Sequelize);
db.comment_proj = require("./Comment_proj.model.js")(sequelize, Sequelize);
db.image = require("./Image.model.js")(sequelize, Sequelize);
db.project_post = require("./Project_post.model.js")(sequelize, Sequelize);
db.review = require("./Review.model.js")(sequelize, Sequelize);
db.otp = require("./OTP.model.js")(sequelize, Sequelize);

db.subcategories.belongsTo(db.categories, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.freelancer_post.belongsTo(db.subcategories, {
  foreignKey: 'skill',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.freelancer_post.belongsTo(db.user, {
  foreignKey: 'freelancer_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.image_freelancer.belongsTo(db.freelancer_post, {
  foreignKey: 'freelancer_post_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.contact.belongsTo(db.freelancer_post, {
  foreignKey: 'freelancer_post_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.contact.belongsTo(db.user, {
  foreignKey: 'client_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.bid.belongsTo(db.user, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.bid.belongsTo(db.project_post, {
  foreignKey: 'proj_post_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.comment_proj.belongsTo(db.project_post, {
  foreignKey: 'proj_post_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.comment_proj.belongsTo(db.user, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.project_post.belongsTo(db.user, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.project_post.belongsTo(db.image, {
  foreignKey: 'img_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.review.belongsTo(db.user, {
  foreignKey: 'user_review',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.review.belongsTo(db.user, {
  foreignKey: 'user_reviewed',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

module.exports = db;
