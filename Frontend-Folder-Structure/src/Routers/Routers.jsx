import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Login, Payment, Profile, Shop, SignUp } from '@/pages';
import { Navbar } from '@/layout';

const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/profile" element={<Profile/>}/>
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
