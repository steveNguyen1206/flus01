import Routers from './Routers/Routers'
import { Header, Footer } from './layout'
import { Home } from './pages';

function App() {

  return (
    <div style={{width:"100%", height:"100%"}}>
      <Header/>
      <Home/>
      <Footer/>
    </div>
      
  );
}

export default App
