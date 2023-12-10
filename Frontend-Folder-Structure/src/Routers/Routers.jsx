import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, LogIn, Profile, Shop, SignUp, Project} from '@/pages';
import { Footer, Header, Navbar } from '@/layout';
import { PayPalDemo } from '@/pages/Payment';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Login2 } from '@/pages';

const Routers = () => {
  return (
    <GoogleOAuthProvider clientId="889944876427-iopa5bnoall08gfrpa40m6bbks248oan.apps.googleusercontent.com">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/paypal-demo" element={<PayPalDemo />} />
          <Route path="/project/" element={<Project />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
};
export default Routers;
