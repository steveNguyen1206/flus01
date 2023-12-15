import Routers from './Routers/Routers';
import WhiteButton from './components/Button/WhiteButton';
import { Header, Footer } from './layout';
import { Home, Profile, SignUp, LogIn } from './pages';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Project from './pages/Project/project';

function App() {
    const initialOptions = {
      clientId: "AadvtuhlBaRav1YVav2ERuNZa_70rjR4OEMm2p1A1MOmSGGRKD-YVErNXjBXGOWLM56qySteKDfbMjek",
      currency: "USD",
      intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <Routers/>
      
    </PayPalScriptProvider>
   
  
  );
}

export default App;
