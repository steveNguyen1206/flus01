import React, { useState } from 'react';
import { WhiteButton } from '@/components';
import './newproject.css';
import exitButton from '../../assets/exitButton.png';
import UploadIcon from '../../assets/UploadIcon.png';

const NewProject = () => {
  const [error, setError] = useState({
    title: '',
    image: '',
    detail: '',
    budgetMin: '',
    budgetMax: '',
  });

  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name); 
  };

  return (
    <div className="new-project-form">
      <button className="exit-button">
        <img src={exitButton} alt="Exit" />
      </button>
      <div className="new-project-header">
        <p>NEW PROJECT</p>
      </div>

      <div className="new-project-body">
        <div className="project-title-input">
          <label htmlFor="projectTitle">Project Title *</label>
          <input
            type="text"
            id="projectTitle"
            name="projectTitle"
            placeholder="Enter project title ..."
          />
          <div className="error-message">{error.title}</div>
        </div>

        <div className="add-image-input">
          <label htmlFor="addImage">Add Image *</label>
          <div className="add-image-container">
            <div className="file-input-container">
              <img className="upload-icon" src={UploadIcon} alt="Upload Icon" />
              <div className="file-input-text">
                <p>
                  Drag & drop files <span className="browse-text">or</span>
                  <label htmlFor="fileInput" className="browse-label">
                    Browse
                  </label>
                </p>
                <input
                  type="file"
                  id="fileInput"
                  name="addImage"
                  accept="image/*"
                  style={{ display: 'none' }} // Ẩn ô input
                  onChange={handleFileChange} // Xử lý file sau khi được chọn
                />
                {fileName && <p className="file-name">{fileName}</p>}
              </div>
            </div>
            <p className="supported-formats">
              Supported formats: JPEG, PNG, JPG
            </p>
          </div>
          <div className="error-message">{error.image}</div>
        </div>

        <div className="project-detail-input">
          <label htmlFor="projectDetail">Project Detail *</label>
          <textarea
            type="text"
            id="projectDetail"
            name="projectDetail"
            placeholder="Enter project details ..."
          />
          <div className="error-message">{error.detail}</div>
        </div>

        <div className="budget-min-input">
          <label htmlFor="budgetMin">Budget Min *</label>
          <input
            type="text"
            id="budgetMin"
            name="budgetMin"
            placeholder="Enter minimum budget ..."
          />
          <div className="error-message">{error.budgetMin}</div>
        </div>

        <div className="budget-max-input">
          <label htmlFor="budgetMax">Budget Max *</label>
          <input
            type="text"
            id="budgetMax"
            name="budgetMax"
            placeholder="Enter maximum budget ..."
          />
          <div className="error-message">{error.budgetMax}</div>
        </div>

        <WhiteButton name="Done" />
      </div>
    </div>
  );
};

export default NewProject;
