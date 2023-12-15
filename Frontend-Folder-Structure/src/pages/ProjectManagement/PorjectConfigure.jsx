import React from "react";
import "./style.css";
import { TextField } from "@mui/material";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useProjectManageContext } from "./ProjectManageProvider";

export const ProjectConfigure = () => {


  const [prePaidFull, setPrePaidFull] = useState(true);
  const {project, setProject} = useProjectManageContext();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };


  function formatMoneyInput(event) {
    // Remove non-numeric characters
    const numericValue = event.target.value.replace(/[^0-9.]/g, '');

    // Format the input as a currency
    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericValue);

    console.log(numericValue) 

    // Update the input value
    event.target.value = numericValue;
    handleInputChange(event)

  }


  const createOrder = async (data) => {
    // Order is created on the server and the order id is returned
    // console.log(data)
    try {
      const response = await paymentServices.createOrder(payload);
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
      const response = await paymentServices.onAprrove(data)
      console.log("Payment successful", response.data); // Log the response data
      setPaySuccess(true);
      return response.data;
    } catch (error) {
      setPaySuccess(false);
      console.error("Error capturing PayPal order:", error);
      throw error;
    }
  };


  return (

          <form className="project-content-container">

            <div className="content-container">
            <div className="project-content-title">
              <h4 className="title-text --size-16">Project name</h4>
              <input name="name" type="text" className="label-text --size-20 my-input my-text-input" value={project.name}/>
            </div>

            <div className="row-container">
              <div className="field-container">
                <div className="title-text --size-16">Date begin</div>
                <input type="date"name="startDate" className="label-text --size-20 my-input"/>
              </div>

              <div className="field-container">
                <div className="title-text --size-16">Date end</div>
                <input type="date" name="endDate" className="label-text --size-20 my-input"/>
              </div>
            </div>

            <div className="row-container">
              <div className="field-container">
                <div className="title-text --size-16">Project owner</div>
                <h5 className="label-text --size-20">Mèo con 123</h5>
              </div>

              <div className="field-container">
              <h4 className="title-text --size-16">Project member</h4>
                <h5 className="label-text --size-20">Chó con 1</h5>
              </div>
            </div>

            <div className="project-requirement-container">
              <h4 className="title-text --size-20">Requierments</h4>
              <TextField  multiline/>
            </div>




            <div className="row-container" style={{ alignItems: 'left'}}>
              <div className="field-container" >
                <h4 className="title-text --size-16">Budget</h4>
                <div className="row-container" style={{marginBottom: 0}}>
                  <input name="budget" type="text" className="label-text --size-20 my-input" onChange={formatMoneyInput}  />
                  <h4 className="title-text --size-16" >VND</h4>
                </div>
              </div>
            </div>

            <div className="row-container" style={{ alignItems: 'left'}}>
              <div className="field-container" >
                <h4 className="title-text --size-16">Pre Pay (minimun 30%)</h4>
                <div className="row-container"  style={{marginBottom: 0}}>
                  <input  type="text" className="label-text --size-20 my-input" value={prePaidFull ? project.budget : project.budget * 30 / 100} readOnly />
                  <h4 className="title-text --size-16" >VND</h4>
                </div>
              </div>
            </div>

            <div className="row-container">
              <div className="row-container" style={{textAlign:'start', marginBottom: 0}}>              
                {/* <button className="my-button --button-green">
                Pay 100% and start
                </button> */}
                <input 
                type="radio" 
                name="pre-paid" 
                value="100" 
                style={{marginRight: 16}} 
                checked={prePaidFull ? true :  false} 
                onChange={() => setPrePaidFull(true)}/>

                <h3 className="title-text --size-20">Pay 100% and start</h3>
              </div>

              <div className="row-container" style={{textAlign:'start', marginBottom: 0} }>
                {/* <button className="my-button --button-green">
                Pay 30% and start
                </button> */}
                <input 
                type="radio" 
                name="pre-paid" 
                value="30" 
                style={{marginRight: 16}}  
                checked={prePaidFull ? false :  true}  
                onChange={() => setPrePaidFull(false)}/>
                <h3 className="title-text --size-20">Pay 30% and start</h3>

              </div>
            </div>

            <PayPalButtons
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            /> 
            {/* <div className="row-container" style={{textAlign: 'start'}}>              
                <button className="my-button --button-gray">
                Cancel
                </button>
            </div> */}

            </div>


          </form>
            
  );
};
