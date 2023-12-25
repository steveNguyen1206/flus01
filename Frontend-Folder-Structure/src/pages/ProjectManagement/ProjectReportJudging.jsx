import React from 'react';
import './style.css';
import { useProjectManageContext } from './ProjectManageProvider';
import { TextField } from '@mui/material';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useRef } from 'react';
import paymentServices from '@/services/paymentServices';
import projectService from '@/services/projectServices';
import { useState, useEffect } from 'react';
import {  formattedDateString } from '@/helper/helper';


export const ProjectReportJudging = () => {
  const { project, setProject } = useProjectManageContext();
  console.log(project);
  const reference = useRef();
  reference.project = project;
  const [report, setReport] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log('tessssssst');
    projectService
      .getProjectReport(project.id, localStorage.getItem('AUTH_TOKEN'))
      .then((report_data) => {
        if (report_data.status == 200) {
          setReport(report_data.data);
        }
        console.log(report_data);
      })
      .catch((error) => {
        console.log(error)
        setError(error.response.data.message);
        console.log(error.response.data.message);
      });
  }, []);

  const createOrder = async (data) => {
    const payload = {
      product_cost: (reference.project.budget * 70) / 100,
      currenry_code: 'USD',
      item_name: 'Project Budget completetion fee',
      description: 'Full paid for project budget ' + reference.project.id,
      sku: project.id,
      email: reference.project.owner.email,
      first_name: reference.project.profile_name,
      last_name: reference.project.profile_name,
      phone: '84' + reference.project.owner.phone_number,
    };

    try {
      console.log('create order:', payload);
      const response = await paymentServices.createOrder(payload);
      console.log(response.data); // Log the response data
      const order = response.data;
      return order.id;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  const onApprove = async (data) => {
    console.log(data);
    try {
      const payload = {
        ...data,
        ...reference.project,
        status: 2,
        tran_amount: (reference.project.budget * 70) / 100,
        userId: reference.project.owner_id,
        tran_type: '0',
        noti_title: "Project budjet fully covered!",
        noti_content: "The client has fully paid the project budget. Time to judging project report. Freelancer will get all the remuneration after your report be accepted."
      };
      const response = await paymentServices.paidAndUpdateProject(
        payload,
        localStorage.getItem('AUTH_TOKEN')
      );
      console.log('Payment successful', response.data); // Log the response data

      window.location.reload();
      return response.data;
    } catch (error) {
      // setPaySuccess(false);
      console.error('Error capturing PayPal order:', error);
      throw error;
    }
  };

  const acceptReport = () => {
    projectService.acceptReport(project.id,  localStorage.getItem('AUTH_TOKEN'))
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
      setError(error.response.data.message);
    })
  }

  return (
    <>
      {project.status == 1 && (
        <div className="project-content-container">
          <div
            className="project-content-title"
            style={{ textAlign: 'center' }}
          >
            <h4 className="title-text">Judging Report</h4>
          </div>

          <h4 className="title-text --size-20" style={{ marginBottom: '16px' }}>
            You have to complete the project budget responsibility before view
            the report
          </h4>

          <div className="row-container" style={{ alignItems: 'left' }}>
            <div className="field-container">
              <h4 className="title-text --size-16">Pre paid</h4>
              <div className="row-container" style={{ marginBottom: 0 }}>
                <input
                  name="budget"
                  type="text"
                  className="label-text --size-20 my-input"
                  value={(project.budget * 30) / 100}
                  readOnly
                />
                <h4 className="title-text --size-16">VND</h4>
              </div>
            </div>
          </div>

          <div className="row-container" style={{ alignItems: 'left' }}>
            <div className="field-container">
              <h4 className="title-text --size-16">Remaining</h4>
              <div className="row-container" style={{ marginBottom: 0 }}>
                <input
                  type="text"
                  className="label-text --size-20 my-input"
                  value={(project.budget * 70) / 100}
                  readOnly
                />
                <h4 className="title-text --size-16">VND</h4>
              </div>
            </div>
          </div>

          <div style={{ width: '80%' }}>
            <PayPalButtons
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />
          </div>
        </div>
      )}

      {(project.status == 2 || project.status == 3) &&
        (error ? (
          <>{error}</>
        ) : (
          <div className="project-content-container">
            <div
              className="project-content-title"
              style={{ textAlign: 'center' }}
            >
              <h4 className="title-text">Judging Report</h4>
            </div>

            <div
              className="project-requirement-container"
              style={{ padding: '5%' }}
            >
              <div className="row-container" style={{ marginBottom: '16px' }}>
                <h5
                  className="title-text --size-16"
                  style={{ marginRight: '5px' }}
                >
                  Last edit:{' '}
                </h5>
                <h5 className="title-text --color-light --size-16">{formattedDateString(report.updatedAt)}</h5>
              </div>

              <div className="row-container" style={{ marginBottom: '16px' }}>
                <h5
                  className="title-text --size-16"
                  style={{ marginRight: '5px' }}
                >
                  Freelancer:{' '}
                </h5>
                <h5 className="title-text --color-light --size-16">
                  {project.member.account_name}
                </h5>
              </div>

              <div className="title-text --size-16">Message</div>
              <TextField
                multiline
                name="report_message"
                value={report.message}
                minRows={5}
              />

              <div className="title-text --size-16" style={{ marginTop: 16 }}>
                Resources
              </div>
              <TextField
                multiline
                name="report_message"
                value={report.resources}
                sx={{ backgroundColor: '#EBE8E8' }}
                minRows={5}
              />

              <div
                className=""
                style={{ textAlign: 'center', margin: '32px 0' }}
              >
                <button
                  className="my-button --button-gray"
                  style={{ margin: '0 5px' }}
                >
                  Reject
                </button>

                <button
                  className="my-button --button-green"
                  style={{ margin: '0 5px' }}
                  onClick={acceptReport}
                >
                  Accept
                </button>
              </div>

              <div
                className="row-container"
                style={{ alignItems: 'center', justifyContent: 'center' }}
              >
                <div className="field-container">
                  <div className="title-text --size-16">Extra time</div>
                  <input
                    id="startDate"
                    type="date"
                    name="start_date"
                    className="label-text --size-20 my-input"
                    value={project.end_date}
                  />
                </div>
                <div className="" style={{ textAlign: 'center', flex: 1 }}>
                  <button
                    className="my-button --button-green"
                    style={{ margin: '0 5px' }}
  
                  >
                    Extend time
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
