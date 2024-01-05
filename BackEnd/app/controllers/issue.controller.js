const db = require("../models");
const issues = db.issues;
const Op = db.Sequelize.Op;

// Retrieve all issues
exports.getAllIssues = (req, res) => {
    issues.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving issues."
            });
        });
};


// Define the getPagination function
function getPagination(page, size) {
    // page > 0, size > 0
    const limit = size;
    const offset = (page - 1) * size;
    return { limit, offset };
  }
  
exports.findIssuesByPage = (req, res) => {
    console.log("\nMY PARAMS:", req.params);
    const { page, size, searchKey } = req.params; // page: 1..n, size: 1..m
    console.log(
        "FFFFFFFFFFFFFFFFFFFF",
        "page: " + page + ", size: " + size + ", searchKey: " + searchKey
    );

    // condition to check searchKey in account_name or profile_name
    var condition =
        searchKey && searchKey !== "undefined" && searchKey !== ""
        ? {
            [Op.or]: [
                { content: { [Op.like]: `%${searchKey}%` } },
                { project_id: { [Op.like]: `%${searchKey}%` } },
            ],
            }
        : null;

    const { limit, offset } = getPagination(parseInt(page), parseInt(size));

    // Find all users with condition by page
    issues.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
    const { rows: m_issues, count: totalItems } = data;

    const response = {
        totalItems,
        proj_posts: m_issues,
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalItems / limit),
    };

    res.send(response);
    })
    .catch((err) => {
    res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
    });
    });
};  
