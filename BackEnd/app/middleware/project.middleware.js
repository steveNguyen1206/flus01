const db = require("../models");
const Project = db.projects;

isMember = (req, res, next) => {
    const id = req.params.id;
    const userId = req.userId;
    console.log(id, userId)
    Project.findOne({where: {id: id}, attributes: ["member_id"]})
    .then((data) => {
        console.log(data.member_id)
        if(data.member_id == userId)
        {
            next();
        }
        else 
        {
            res.status(403).send({mesage: "Permission denied! Required member of the project."});
        }
    })
    .catch((error) => {
        res.status(500).send({mesage: "Error retrieving project: ", error});

    })
};

isOwner = (req, res, next) => {
    const id = req.params.id ?  req.params.id :  req.body.id;
    const userId = req.userId;
    Project.findByPk(id, {attributes: ["owner_id"]})
    .then((data) => {
        console.log(data.owner_id)
        if(data.owner_id == userId)
        {
            next();
        }
        else 
        {
            res.status(403).send({message: "Permission denied! Required owner of the project."});
        }
    })
    .catch((error) => {
        res.status(500).send({mesage: "Error retrieving project: ", error});

    })
};

isMemberOrOwner = (req, res, next) => {
    const id = req.params.id;
    const userId = req.userId;
    Project.findByPk(id, {attributes: ["owner_id", "member_id"]})
    .then((data) => {
        console.log(data.owner_id)
        if(data.owner_id == userId || data.member_id == userId)
        {
            next();
        }
        else 
        {
            res.status(403).send({mesage: "Permission denied! Required owner or member of the project."});
        }
    })
    .catch((error) => {
        res.status(500).send({mesage: "Error retrieving project: ", error});

    })
};

const projectMiddlware = {
    isMember: isMember,
    isOwner: isOwner,
    isMemberOrOwner: isMemberOrOwner,
}
module.exports = projectMiddlware;
