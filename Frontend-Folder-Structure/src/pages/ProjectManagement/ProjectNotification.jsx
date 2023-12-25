import React from 'react';
import './style.css';
import { useProjectManageContext } from './ProjectManageProvider';
import { TextField } from '@mui/material';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useRef } from 'react';
import projectService from '@/services/projectServices';
import { useState, useEffect } from 'react';
import { formattedDateString } from '@/helper/helper';


export const ProjectNotification = () => {

    const {project, setProject} = useProjectManageContext();
  const [notis, setNotis] = useState([])
  const [error, setError] = useState(null)

  useEffect(()=> {
    projectService.getALlNotifications(project.id, localStorage.getItem("AUTH_TOKEN"))
    .then( (notis_data) => {
        console.log(notis_data.data)
        setNotis(notis_data.data)
    })
    .catch( (error)=> {
        console.log(error);
        setError(error.response.data.message);
    })
  }, [])


  return (
    <div className="project-content-container">

        {
            notis.map(noti => (
                <div className="project-requirement-container" style={{textAlign: "left"}}>
                    <h4 className='title-text --size-16'>{noti.title}</h4>
                    <div className="row-container" style={{marginBottom: "16px"}}>
                        <h4 className="title-text --size-16">{noti.creator_id}</h4>
                        <h4 className="title-text --size-16">{formattedDateString(noti.createdAt)}</h4>
                    </div>
                    
                    <p sx={{width: "100%"}} >{noti.content}</p>
                    <div className="detail-container" style={{marginTop: "16px",textAlign: "right"}}>
                        <h4 className='title-text --size-16 --color-green'>Detail</h4>
                    </div>
                </div>
            ))
        }

    </div>
  );
};
