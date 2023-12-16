import './Filter.css';
import React, { useState, useEffect } from 'react';
import subcategoryService from '@/services/subcategoryService';
const Filter = () => {

  // const initialSkill = {
  //   'id': '',
  //   'subcategory_name': ''
  // };

  // const [skills, setSkills] = useState(initialSkill);

  // const getSkills = () => {
  //   subcategoryService
  //     .findAll()
  //     .then((response) => {
  //       setSkills(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }


  const initialSkills = [
    {
      'id': '',
      'subcategory_name': ''
    }
  ];

  const [skills, setSkills] = useState(initialSkills);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = () => {
    subcategoryService
      .findAll()
      .then((response) => {
        setSkills(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  return (
    <div className="filter-container">
      <div className="header">
        <h2>Filter</h2>
      </div>
      <div className="body">
        <select className="filter">
          <option value="" disabled defaultValue>
            Add skills
          </option>
          {/* <option value="web_design">Web Design</option>
          <option value="photography">Photography</option>
          <option value="backend_dev">Backend Development</option> */}
          {skills.map(skill => (
            <option key={skill.id} value={skill.id}>
              {skill.subcategory_name}
            </option>
          ))}
        </select>

        <div className="skill-container">
          {/* <div className="skill">Web Design</div>
          <div className="skill">Photography</div>
          <div className="skill">Backend Development</div>
          <div className="skill">Backend Development</div>
          <div className="skill">Backend Development</div>
          <div className="skill">Backend Development</div> */}
          {skills.map(skill => (
            <div key={skill.id} className="skill">
              {skill.subcategory_name}
            </div>
          ))}
        </div>

      </div>


      <div className="salary-range">
        <p>Salary Range</p>
        <input type="range" min="0" max="20000" />
        <div className="display">
          <div className="from">
            <p style={{ width: '100px' }}>From</p>
            <div className='lower'>
              <p className="values">0</p>
            </div>
            <p className="dollar">$</p>
          </div>
          <div className="to">
            <p style={{ width: '100px' }}>To</p>
            <div className='upper'>
              <p className="values">20000</p>
            </div>
            <p className="dollar">$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
