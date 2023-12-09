import React, {useState}from 'react'
import "./login.css"
import exitButton from '../../assets/exitButton.png'
import googleIcon from '../../assets/SocialIcon/google.png'
import authServices from '@/services/authServices'
import { useNavigate } from 'react-router'

const LogIn = () => {
  const InititalLoginPayload = {
    userName: "",
    userPassword: "",
  }

  let navigate = useNavigate();
  
  const [loginPayload, setLoginPayload] = useState(InititalLoginPayload)

  const handleInputChange =  event => {
    const {name, value} = event.target;
    setLoginPayload({...loginPayload, [name]: value})
  }

  const signin = () => {
    var data = {
      account_name: loginPayload.userName,
      password: loginPayload.userPassword
    };

    authServices.signin(data)
      .then(response => {
        if(response.status == 200)
        {
          var id = response.data.id;

          // jwt lưu lại accesstoken (local storage của trình duyệt và gửi kèm token theo các truy vấn tiếp theo)
          navigate(`/profile/${id}`)
        }
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div style={{zIndex:"100",height:"100%", width:"100%",backgroundColor:"rgba(256, 256, 256, 0.8)", position:"absolute"}}>
      <div className="pop-up-sign-in">
        <div className="signin-wrapper">
        <div className="navigation">
          <div className="header-popup-text">Sign In</div>
          <img className="frame-4" alt="Frame" src={exitButton} />
        </div>
        
        <div className='info-field'>
          <div className="input-container">
            <label for="inputUsername" class="form-label">Username</label>
            <input 
            id="inputUsername" 
            name='userName' 
            type="text" 
            class="form-control" 
            placeholder="Username" 
            aria-label="Username" 
            aria-describedby="basic-addon1"
            onChange={handleInputChange}/>
          </div>
          <div className="input-container">
            <label for="inputPassword5" class="form-label">Password</label>
            <input 
            type="password"  
            name='userPassword' 
            id="inputPassword5" 
            class="form-control" 
            aria-describedby="passwordHelpBlock"
            onChange={handleInputChange}/>
          </div>

          <div className="sign-in-button">
            <div className="div-wrapper">
              <div className="text-wrapper-2" onClick={signin}>Sign in</div>
            </div>
          </div>

          <div className="or-sign-in-using-wrapper">
            or continue with
          </div>
          <div className="frame-2">
            <img className="ellipse" alt="Ellipse" src={googleIcon} />
            {/* <img className="img" alt="Ellipse" src={} /> */}
          </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default LogIn
