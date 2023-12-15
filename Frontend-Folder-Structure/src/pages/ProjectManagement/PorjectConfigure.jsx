import React from "react";
import "./style.css";
import { TextField } from "@mui/material";

export const ProjectConfigure = () => {
  return (

          <form className="project-content-container">

            <div className="content-container">
            <div className="project-content-title">
              <h4 className="title-text --size-16">Project name</h4>
              <input name="project-name" type="text" className="label-text --size-20 my-input my-text-input" placeholder="Cao tốc bắc nam"/>
            </div>

            <div className="row-container">
              <div className="field-container">
                <div className="title-text --size-16">Date begin</div>
                <input type="date" className="label-text --size-20 my-input"/>
              </div>

              <div className="field-container">
                <div className="title-text --size-16">Date end</div>
                <input type="date" className="label-text --size-20 my-input"/>
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
                  <input name="project-name" type="text" className="label-text --size-20 my-input" placeholder="20000000"  />
                  <h4 className="title-text --size-16" >VND</h4>
                </div>
              </div>
            </div>

            <div className="row-container" style={{ alignItems: 'left'}}>
              <div className="field-container" >
                <h4 className="title-text --size-16">Pre Pay (minimun 30%)</h4>
                <div className="row-container"  style={{marginBottom: 0}}>
                  <input name="project-name" type="text" className="label-text --size-20 my-input" placeholder="20000000"  />
                  <h4 className="title-text --size-16" >VND</h4>
                </div>
              </div>
            </div>

            <div className="row-container">
              <div className="field-container" style={{textAlign:'start'}}>              
                <button className="my-button --button-green">
                Pay 100% and start
                </button>
              </div>

              <div className="field-container" style={{textAlign:'end'}}>
                <button className="my-button --button-green">
                Pay 30% and start
                </button>
              </div>
            </div>

            <div className="row-container" style={{textAlign: 'start'}}>              
                <button className="my-button --button-gray">
                Cancel
                </button>
            </div>

            </div>


          </form>
            
  );
};
