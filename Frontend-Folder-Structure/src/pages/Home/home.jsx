import React from 'react'
import './home.css'
import { Button, Inputs, Modal, ToolTip } from '@/components'
import { Header, Footer, Navbar } from '@/layout'
import banner from '../../assets/banner.jpg'
import human from '../../assets/Human.png'
import skill from '../../assets/skill.png'

const index = () => {
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
        <div className='category-wrapper'>
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

    </div>
  )
}

export default index


{/* <div className="overlap-wrapper">
 
</div>
<div className="overlap-group-wrapper">
  
</div>
<div className="group-2">
  <div className="thit-k-cha-c-tn-wrapper">
    <img className="thit-k-cha-c-tn" alt="Thit k cha c tn" src="thi-t-k-ch-a-c-t-n-1.png" />
  </div>
</div> */}
{/* <div className="frame">
  <div className="ctn-category">
    <div className="txt-category">Category</div>
  </div>
  <div className="frame-2">
    <div className="group-3">
      <div className="text-wrapper-5">Web Design</div>
      <img className="image" alt="Image" src={skill} />
    </div>
    <div className="group-3">
      <div className="text-wrapper-5">Web Design</div>
      <img className="image" alt="Image" src="image.png" />
    </div>
    <div className="group-3">
      <div className="text-wrapper-5">Web Design</div>
      <img className="image" alt="Image" src="image-12-2.png" />
    </div>
    <div className="group-3">
      <div className="text-wrapper-5">Web Design</div>
      <img className="image" alt="Image" src="image-12-3.png" />
    </div>
    <div className="group-3">
      <div className="text-wrapper-5">Web Design</div>
      <img className="image" alt="Image" src="image-12-4.png" />
    </div>
    <div className="group-4">
      <div className="text-wrapper-5">Web Design</div>
      <img className="image" alt="Image" src="image-12-5.png" />
    </div>
  </div>
  <div className="frame-3">
    <div className="group-3">
      <div className="text-wrapper-5">Web Design</div>
      <img className="image" alt="Image" src="image-12-6.png" />
    </div>
    <div className="group-3">
      <div className="text-wrapper-5">Web Design</div>
      <img className="image" alt="Image" src="image-12-7.png" />
    </div>
    <div className="group-3">
      <div className="text-wrapper-5">Web Design</div>
      <img className="image" alt="Image" src="image-12-8.png" />
    </div>
    <div className="group-3">
      <div className="text-wrapper-5">Web Design</div>
      <img className="image" alt="Image" src="image-12-9.png" />
    </div>
    <div className="group-3">
      <div className="text-wrapper-5">Web Design</div>
      <img className="image" alt="Image" src="image-12-10.png" />
    </div>
    <div className="group-4">
      <div className="text-wrapper-5">Web Design</div>
      <img className="image" alt="Image" src="image-12-11.png" />
    </div>
  </div>
</div> */}