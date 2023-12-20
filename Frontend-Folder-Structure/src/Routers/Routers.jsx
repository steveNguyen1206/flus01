import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, LogIn, Profile, Shop, SignUp, Project, FindFreelancer, Job, UpdateAvatarForm} from '@/pages';
import { Footer, Header, Navbar } from '@/layout';
import { PayPalDemo } from '@/pages/Payment';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Login2 } from '@/pages';
// import CreateFreelancerPost from '@/pages/FindFreelancer/createFreelancerPost';
// import UpdateFreelancerPost from '@/pages/FindFreelancer/updateFreelancerPost';
// import FindFreelancer from '@/pages/FindFreelancer/findFreelancer';

const Routers = () => {
  return (
    <GoogleOAuthProvider clientId="138372560551-k6qucf4eebnppht116rieqoa6bfm801b.apps.googleusercontent.com">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/updateAvatar/:id" element={<UpdateAvatarForm />} />
          <Route path="/paypal-demo" element={<PayPalDemo />} />
          <Route path="/project/" element={<Project />} />
          <Route path="/findFreelancer" element={<FindFreelancer />} />
          {/* <Route path="/createFreelancerPost" element={<CreateFreelancerPost />} /> */}
          {/* <Route path="/updateFreelancerPost/:id" element={<UpdateFreelancerPost />} /> */}
          <Route path="/job" element={<Job />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
};
export default Routers;
