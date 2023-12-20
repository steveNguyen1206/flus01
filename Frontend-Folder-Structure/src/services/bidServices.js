import http from "./http-common";

const bidProject = (bid) => {
    return http.post("/bid/create", bid);
}

const findBidByProjectId = (project_id) => {
    return http.get("/bid/findBidByProjectId/" + project_id);
}

const findBidByFreelancerId = (freelancer_id) => {
    return http.get("/bid/findBidByFreelancerId/" + freelancer_id);
}

const acceptBid = (bid_id) => {
    return http.get("/bid/acceptBid/" + bid_id);
}

const rejectBid = (bid_id) => {
    return http.put("/bid/rejectBid/" + bid_id);
}

const bidService = {
    bidProject,
    findBidByProjectId,
    findBidByFreelancerId,
    acceptBid,
    rejectBid,
};

