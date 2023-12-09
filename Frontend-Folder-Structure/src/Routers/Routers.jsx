import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, LogIn, Profile, Shop, SignUp, Project} from '@/pages';
import { Navbar } from '@/layout';
import { PayPalDemo } from '@/pages/Payment';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { Login2 } from '@/pages/Login/login2';

const Routers = () => {
  return (
    <GoogleOAuthProvider clientId="138372560551-k6qucf4eebnppht116rieqoa6bfm801b.apps.googleusercontent.com">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/paypal-demo" element={<PayPalDemo />} />
          <Route path="/project/" element={<Project />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};
export default Routers;
