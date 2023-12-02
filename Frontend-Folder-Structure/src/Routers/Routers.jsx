import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, LogIn, Profile, Shop, SignUp, Login2 } from '@/pages';
import { Navbar } from '@/layout';
import { PayPalDemo } from '@/pages/Payment';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { Login2 } from '@/pages/Login/login2';

const Routers = () => {
  return (
    <div>
          <GoogleOAuthProvider clientId="138372560551-k6qucf4eebnppht116rieqoa6bfm801b.apps.googleusercontent.com">

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          
            <Route path="/login2" element={<Login2 />} />
          
          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path='/paypal-demo' element={<PayPalDemo/>} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
      </GoogleOAuthProvider>

    </div>
  );
};

export default Routers;
