import Routers from './Routers/Routers'
import { Header, Footer } from './layout'
import { Home, Profile, SignUp, LogIn } from './pages';


function App() {

  return (
    <div style={{width:"100%", height:"100%"}}>
      {/* <Header/> */}
      <Profile/>
      {/* <SignUp/> */}
      {/* <Footer/> */}
      {/* <LogIn/> */}

    </div>
      
  );
}

export default App
