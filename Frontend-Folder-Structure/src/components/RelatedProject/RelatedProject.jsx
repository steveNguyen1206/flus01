import profileImage from '../../assets/profile_image.png';
import vietnam from '../../assets/vietnam.png';
import heart from '../../assets/heart-active.png';
import './RelatedProject.css';
function RelatedProject() {
  return (
    <div className="related-project">
      <div className="related-project-header">
        <div className="related-image">
          <img src={profileImage} alt="profile" />
        </div>
        <div className="related-detail-name">
          <div className="related-name">
            <p>Nguyen Thi Truc</p>
            <p>(cogai20)</p>
            <img src={vietnam} alt="vietnam" />
          </div>
          <div className="related-project-name">
            SEO, Link Building, Marketing, Google Adwords, WordPress
          </div>
        </div>
      </div>
      <div className="related-detail">
        <div className="related-detail-left">
          Detail text here everyone. Hello everyone, my name is Duy Khang Ho.
          This job is hard... Hello everyone, my name is Duy Khang Ho... View
          Details
        </div>
        <div className="related-detail-right">
          <div className="related-budget">$500 - $700</div>
          <div className="related-wish">
            <button className="button-wish">
              <img src={heart} alt="heart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedProject;
