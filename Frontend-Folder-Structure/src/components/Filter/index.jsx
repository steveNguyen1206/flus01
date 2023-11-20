import './Filter.css';

const Filter = () => {
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
          <option value="web_design">Web Design</option>
          <option value="photography">Photography</option>
          <option value="backend_dev">Backend Development</option>
        </select>
      </div>
      <div className="salary-range">
        <p>Salary Range</p>
        <input type="range" min="0" max="20000" />
        <div className="display">
          <div className="from">
            <p>From</p>
            <div className='lower'></div>
          </div>
          <div className="to">
            <p>To</p>
            <div className='upper'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
