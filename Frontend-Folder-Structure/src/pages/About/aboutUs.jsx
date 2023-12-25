import React from "react";
import "./aboutUs.css";
import banner from "../../assets/banner.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../../assets/avatar_green.png";
import { StarRating } from "@/components";
import human from "../../assets/Human.png";
import { Carousel, CarouselItem } from "react-bootstrap";
const AboutUs = () => {

  const carousel_settings = {
    dots: true,
    infinite: true,
    arrows: true, 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="about-us">
      <div className="div">
      <div className="overlap-2">
        <div className="about-us-banner">
          <div className="about-us-text-wrapper-12">About FLUS</div>
          <div className="rectangle-4" />
          <p className="about-us-text-wrapper-11">
            Remember to keep your presentation focused and engaging while providing a comprehensive overview of
            the topic. Water quality and pollution in the natural environment are critical issues, and your
            presentation can help raise awareness and promote responsible environmental stewardship.
          </p>
          <div className="to-instruction-txt">
            To Instruction
          </div>
        </div>
      </div>
      <div className="frame">
        <p className="experts-title">We Are a Team of Experts</p>
        <Slider {...carousel_settings} >
          <div>
            <div className="frame-2">
              <img className="about-avatar-wrapper" alt="Ellipse" src={avatar}/>
              <div className="founder-name">Ho Duy Khang</div>
              <div className="text-wrapper-6">~ o ~</div>
              <p className="founder-instruction">
                Nguyen Thi Truc is the founder of abc.She hsa xyv experience in baking. She is one of the Co-founder
              </p>
            </div>
          </div>
          <div>
            <div className="frame-2">
              <img className="about-avatar-wrapper" alt="Ellipse" src={avatar}/>
              <div className="founder-name">Nguyen Hai Chan</div>
              <div className="text-wrapper-6">~ o ~</div>
              <p className="founder-instruction">
                Nguyen Thi Truc is the founder of abc.She hsa xyv experience in baking. She is one of the Co-founder
              </p>
            </div>
          </div>
          <div>
            <div className="frame-2">
              <img className="about-avatar-wrapper" alt="Ellipse" src={avatar}/>
              <div className="founder-name">Vo Hoang Hoa Vien</div>
              <div className="text-wrapper-6">~ o ~</div>
              <p className="founder-instruction">
                Nguyen Thi Truc is the founder of abc.She hsa xyv experience in baking. She is one of the Co-founder
              </p>
            </div>
          </div>
          <div>
            <div className="frame-2">
              <img className="about-avatar-wrapper" alt="Ellipse" src={avatar}/>
              <div className="founder-name">Le Thanh Dat</div>
              <div className="text-wrapper-6">~ o ~</div>
              <p className="founder-instruction">
                Nguyen Thi Truc is the founder of abc.She hsa xyv experience in baking. She is one of the Co-founder
              </p>
            </div>
          </div>
          <div>
            <div className="frame-2">
              <img className="about-avatar-wrapper" alt="Ellipse" src={avatar}/>
              <div className="founder-name">Nguyen Thi Truc Vy</div>
              <div className="text-wrapper-6">~ o ~</div>
              <p className="founder-instruction">
                Nguyen Thi Truc is the founder of abc.She hsa xyv experience in baking. She is one of the Co-founder
              </p>
            </div>
          </div>
          
        </Slider>
      </div>
      <div className="expert-review-section">
        <Carousel data-bs-theme="dark" interval={null}>
          <CarouselItem>
            <div style={{width:"1110px"}}>
              <div className="review-container row">
                <div className="col" style={{height:"100%", alignItems:"flex-end"}}>
                  <img className="rectangle-5" alt="Rectangle" src={human} />
                </div>
                <div className="col" style={{flexDirection:"column"}}>
                  <p className="reviewer-quote">
                    Remember to keep your presentation focused and engaging while providing a comprehensive overview of the
                    topic. Water quality and pollution in the natural environment are critical issues, and your presentation can
                    help raise awareness and promote responsible environmental stewardship.
                  </p>
                  <div className="star-rating-wrapper">
                    <StarRating rating={4} width={200}/>
                  </div>
                </div>
              </div>
            </div>
            
          </CarouselItem>
          <CarouselItem>
            <div className="review-container row">
              <div className="col" style={{height:"100%", alignItems:"flex-end"}}>
                <img className="rectangle-5" alt="Rectangle" src={human} />
              </div>
              <div className="col" style={{flexDirection:"column"}}>
                <p className="reviewer-quote">
                  Remember to keep your presentation focused and engaging while providing a comprehensive overview of the
                  topic. Water quality and pollution in the natural environment are critical issues, and your presentation can
                  help raise awareness and promote responsible environmental stewardship.
                </p>
                <div className="star-rating-wrapper">
                  <StarRating rating={4} width={200}/>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="review-container row">
              <div className="col" style={{height:"100%", alignItems:"flex-end"}}>
                <img className="rectangle-5" alt="Rectangle" src={human} />
              </div>
              <div className="col" style={{flexDirection:"column"}}>
                <p className="reviewer-quote">
                  Remember to keep your presentation focused and engaging while providing a comprehensive overview of the
                  topic. Water quality and pollution in the natural environment are critical issues, and your presentation can
                  help raise awareness and promote responsible environmental stewardship.
                </p>
                <div className="star-rating-wrapper">
                  <StarRating rating={4} width={200}/>
                </div>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
      {/* <div className="group-wrapper">
        <div className="group-2">
          <div className="overlap-group-2">
            <div className="carousel-icon">
              <div className="ellipse-2" />
              <div className="ellipse-3" />
              <div className="ellipse-4" />
            </div>
            <img className="img" alt="Rectangle" src="rectangle-2844.png" />
            <img className="rectangle-2" alt="Rectangle" src="rectangle-2845.svg" />
            <img className="rectangle-3" alt="Rectangle" src="rectangle-2846.svg" />
            <div className="text-wrapper-7">People having a job</div>
            <p className="text-wrapper-8">Type of user in our web</p>
            <div className="text-wrapper-9">People waiting</div>
          </div>
          <div className="text-wrapper-10">Our site’s results</div>
        </div>
      </div> */}

      
    </div>
  </div>
  );
};


export default AboutUs;