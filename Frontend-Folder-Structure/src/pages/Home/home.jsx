import React, {useState, useEffect} from 'react'
import './home.css'
import { Inputs, Modal, ToolTip } from '@/components'
import { Header, Footer, Navbar } from '@/layout'
import banner from '../../assets/banner.jpg'
import human from '../../assets/Human.png'
import skill from '../../assets/skill.png'
import { FreelancerPost, Post } from '@/components/JobPost'
import freelancer_post_Service from '@/services/freelancer_post_Service'

const index = () => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await freelancer_post_Service.allposts();
      const sortedPosts = postsData.data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setPosts(sortedPosts);
      console.log('data', sortedPosts);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <div className='homepage'>
       <div className="BannerSection">
        
        <img className="magnificent-view" alt="Magnificent view" src={banner} />
        <div className="rectangle" />
        <p className="text-wrapper"> Remember to keep your presentation focused and engaging while providing a comprehensive overview of the topic. Water quality and pollution in the natural environment are critical issues. </p>
        
        <div className="text-wrapper-2">FLUS</div>
        <img className="img" alt="Rectangle" src={human} />
        <div className='ButtonInBanner'>
          <div className="button-wrapper-1">
            <div className="text-wrapper-3">Find Freelancers</div>
          </div>
          <div className="button-wrapper-2">
            <div className="text-wrapper-4">Find Projects</div>
          </div>
        </div>
      </div>
      <div className='CategorySection'>
        <div className='home-category-wrapper'>
          <div className="ctn-category">
            <div className="txt-category">Category</div>
          </div>
          <div className='container' id='category-container_201123' style={{height:"100%", width:"100%", padding:"2% 5% 2% 5%"}}>
            <div className='row row-cols-5' style={{height:"100%", width:"100%", margin:"0"}}>
              <div className='col'>
                <div className="group-3">
                  <div className="text-wrapper-5">Web Design</div>
                  <img className="image" alt="Image" src={skill} />
                </div>
              </div>
              <div className='col'>
                <div className="group-3">
                  <div className="text-wrapper-5">Web Design</div>
                  <img className="image" alt="Image" src={skill} />
                </div>
              </div>
              <div className='col'>
                <div className="group-3">
                  <div className="text-wrapper-5">Web Design</div>
                  <img className="image" alt="Image" src={skill} />
                </div>
              </div>
              <div className='col'>
                <div className="group-3">
                  <div className="text-wrapper-5">Web Design</div>
                  <img className="image" alt="Image" src={skill} />
                </div>
              </div>
              <div className='col'>
                <div className="group-3">
                  <div className="text-wrapper-5">Web Design</div>
                  <img className="image" alt="Image" src={skill} />
                </div>
              </div>
              <div className='col'>
                <div className="group-3">
                  <div className="text-wrapper-5">Web Design</div>
                  <img className="image" alt="Image" src={skill} />
                </div>
              </div>
              <div className='col'>
                <div className="group-3">
                  <div className="text-wrapper-5">Web Design</div>
                  <img className="image" alt="Image" src={skill} />
                </div>
              </div>
              <div className='col'>
                <div className="group-3">
                  <div className="text-wrapper-5">Web Design</div>
                  <img className="image" alt="Image" src={skill} />
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
      <div className='ProjectSection'>
        <div className='project-header'>
          Latest Freelancer Posts
        </div>
        <div className='project-container'>
          {posts.map(post => (
            <FreelancerPost 
              key={post.id} post={post}
              post_id={post.id}
              freelancer_id={post.freelancer_id}
              about_me={post.about_me}
              lowest_price={post.lowest_price}
              skill_description={post.skill_description}
              
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default index

