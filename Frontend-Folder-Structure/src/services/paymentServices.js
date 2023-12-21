import http from "./http-common";

const createOrder = (data) => {
  return http.post("/paypal/create-orders", data);
};

const onAprrove = (data) => {
    return http.post(`/paypal/orders/${data.orderID}/capture`, {orderID: data.orderID});
  };
  

const createPayoutBatch = (data) => {
  return http.post('/paypal/createPayoutBatch', data);
}
const paymentServices = {
 createOrder,
 onAprrove,
 createPayoutBatch
 
};

export default paymentServices;
