import Routers from './Routers/Routers';
import WhiteButton from './components/Button/WhiteButton';
import { Header, Footer } from './layout';
import { Home, Profile, SignUp, LogIn } from './pages';
import Filter from './components/Filter';
import Post from './components/JobPost/Post';
import Job from './pages/Job/job';
import FindFreelancer from './pages/FindFreelancer/findFreelancer';

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* <Header/> */}
      {/* <Home/> */}
      {/* <Filter/> */}
      {/* <Post/> */}
      {/* <SignUp/> */}
      {/* <Footer/> */}
      {/* <LogIn/> */}
      {/* <FindFreelancer /> */}
      {<Job />}
      {/* <Routers/> */}
    </div>
  );
}

export default App;
