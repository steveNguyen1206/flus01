
const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;
const base = "https://api-m.sandbox.paypal.com";
const fetch = require("node-fetch");
const projectController = require("../controllers/project.controller.js");
const db = require("../models");
const Project = db.projects;



const generateAccessToken = async () => {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
    ).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
  }
};

/**
* Create an order to start the transaction.
* @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
*/


const createOrder = async (data) => {
  // use the product information passed from the front-end to calculate the purchase unit details
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: data.currenry_code,
          value: data.product_cost,
          breakdown:
          {
            item_total: {
              currency_code: data.currenry_code,
              value: data.product_cost,
            }
          }
        },
        items: [
          {
            name: data.item_name,
            quantity: 1,
            description: data.description,
            sku: data.sku,
            unit_amount: {
              currency_code: data.currenry_code,
              value: data.product_cost,
            }
          }
        ]
      }
    ],
    payment_source: {
      paypal: {
        email_address: data.email,
        name: {
          given_name: data.first_name,
          surname: data.last_name
        },
        phone:
        {
          phone_type: "HOME",
          phone_number: {
            national_number: data.phone
          }
        }
      }
    }
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};

/**
* Capture payment for the created order to complete the transaction.
* @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
*/


const captureOrder = async (orderID) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
  });

  return handleResponse(response);
};



const creatPayoutBatch = async (data) => {
    const accessToken = await generateAccessToken();
    const url = `${base}/v1/payments/payouts`;
    const payload = {
      sender_batch_header: {
        sender_batch_id: data.batch_id,
        recipient_type: "EMAIL",
        email_subject: data.subject,
        email_message: data.message
      },
      items: [
        {
          amount: {
            value: data.cost,
            currency: data.currency,
          },
          sender_item_id: data.sender_item_id,
          recipient_wallet: "PAYPAL",
          receiver: data.receiver
        },
        // {
        //   "amount": {
        //     "value": "112.34",
        //     "currency": "USD"
        //   },
        //   "sender_item_id": "201403140002",
        //   "recipient_wallet": "PAYPAL",
        //   "receiver": "<receiver2@example.com>"
        // },
        // {
        //   "recipient_type": "PHONE",
        //   "amount": {
        //     "value": "5.32",
        //     "currency": "USD"
        //   },
        //   "note": "Thanks for using our service!",
        //   "sender_item_id": "201403140003",
        //   "recipient_wallet": "VENMO",
        //   "receiver": "<408-234-1234>"
        // }
      ]
    };
  
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
  
    return handleResponse(response);
}

async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}


exports.apiCreatePayoutBatch = async (req, res) => {
  try
  {
    const data = req.body;
    console.log(data)
    const {httpStatusCode, batchData} = await creatPayoutBatch(data);
    res.status(httpStatusCode).json(batchData);
  }
  catch (error)
  {
    console.error("Failed to create batch:", error);
    res.status(500).json({ error: "Failed to create batch." });
  }
}


//    app.post("/api/orders", 
exports.apiCreateOrders = async (req, res) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const data = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(data);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
};

exports.apiPrePaidCreateProject = async (req, res) => {
  // console.log(req.body)
  // if((req.body.tran_amount == req.body.budget && req.body.status == 2) 
  //     || (req.body.tran_amount == req.body.budget * 30 / 100 && req.body.status == 1))
  {

    const projectId = req.body.id;
    const project = await Project.findByPk(projectId)
      .then(async (project_data ) => {
        const project_status = project_data.status;
        if((req.body.tran_amount == req.body.budget && req.body.status == 2 && project_status == 0) 
        || (req.body.tran_amount == req.body.budget * 30 / 100 && req.body.status == 1 && project_status == 0)
        || (req.body.tran_amount == req.body.budget * 70 / 100 && req.body.status == 2 && project_status == 1)
        )
        {
          try {
            const { orderID } = req.params;
            // use the cart information passed from the front-end to calculate the order amount detals
            // const data = req.body;
            const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
            const response = projectController.update(req, res);
            // res.status(httpStatusCode).json(jsonResponse);
          } catch (error) {
            console.error("Failed to pay prepaid:", error);
            res.status(500).json({ error: "Failed to pay prepaid" });
          }
        }
        else res.status(400).json({ error: "Bad request, the amount paid dont match with configure of the project." });

      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Project with id=" + id
        });
      });

  }
  // else res.status(400).json({ error: "Bad request, the amount paid dont match with configure of the project." });
    
};

//   app.post("/api/orders/:orderID/capture",
exports.apiCaptureOrder = async (req, res) => {
  try {
    const { orderID } = req.params;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
};