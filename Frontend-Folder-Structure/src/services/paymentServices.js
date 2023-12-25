import http from "./http-common";

const createOrder = (data) => {
  return http.post("/paypal/create-orders", data);
};

const onAprrove = (data) => {
    return http.post(`/paypal/orders/${data.orderID}/capture`, {orderID: data.orderID});
  };


const paidAndUpdateProject = (data, access_token) => {
  console.log(data);
  return http.post(`/paypal/orders/${data.orderID}/prePaidCreateProject`, data, {headers: {
    "Content-type": "application/json",
    "x-access-token": access_token,
  }});
};
  

const createPayoutBatch = (data) => {
  return http.post('/paypal/createPayoutBatch', data);
}
const paymentServices = {
 createOrder,
 onAprrove,
 createPayoutBatch,
 paidAndUpdateProject
 
};

export default paymentServices;
