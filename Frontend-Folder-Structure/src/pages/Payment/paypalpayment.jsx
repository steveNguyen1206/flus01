import React from "react";
import { ReactDOM } from "react";
import { PayPalScriptProvider,  PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

const PayPalPayment = () => {

    const server_host = "http://127.0.0.1:8080"
    const createOrder = async (data) => {


        // Order is created on the server and the order id is returned
        // return fetch(`${server_host}/api/paypal/create-orders`, {
        //   method: "POST",
        //    headers: {
        //     "Content-Type": "application/json",
        //   },
        //   // use the "body" param to optionally pass additional order information
        //   // like product skus and quantities
        //   body: JSON.stringify({
        //     product: {
        //         decription: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
        //         cost: "399.99",
        //       },
        //   }),
        // })
        // .then((response) => {
        //   console.log(response)
        //   response.json();})
        // .then((order) => {
        //   console.log(order);
        //   order.id});

        try {
          const response = await axios.post(`${server_host}/api/paypal/create-orders`, {
            product: {
              description: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
              cost: "399.99",
            },
          }, {
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          console.log(response.data); // Log the response data
      
          const order = response.data;
          return order.id;
        } catch (error) {
          console.error("Error creating order:", error);
          throw error;
        }
      };


      const onApprove = async (data) => {
        try {
          const response = await axios.post(`${server_host}/api/paypal/orders/${data.orderID}/capture`, {
            orderID: data.orderID,
          }, {
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          console.log("Payment successful", response.data); // Log the response data
      
          return response.data;
        } catch (error) {
          console.error("Error capturing PayPal order:", error);
          throw error;
        }
      };


      return (
        <PayPalButtons
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      );
};

export default PayPalPayment;