import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, LogIn, Profile, Shop, SignUp } from '@/pages';
import { Navbar } from '@/layout';
import { PayPalDemo } from '@/pages/Payment';

const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path='/paypal-demo' element={<PayPalDemo/>} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
