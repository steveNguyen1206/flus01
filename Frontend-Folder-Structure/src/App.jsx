import Routers from './Routers/Routers'
import { Header, Footer } from './layout'
import { Home, Profile, SignUp, LogIn } from './pages';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


function App() {

  const initialOptions = {
    clientId: "AadvtuhlBaRav1YVav2ERuNZa_70rjR4OEMm2p1A1MOmSGGRKD-YVErNXjBXGOWLM56qySteKDfbMjek",
    currency: "USD",
    intent: "capture",
};

  return (
    <PayPalScriptProvider options={initialOptions}>
      <Routers />

    </PayPalScriptProvider>
    // <div style={{width:"100%", height:"100%"}}>
    //   {/* <Header/> */}
    //   <Profile/>
    //   {/* <SignUp/> */}
    //   {/* <Footer/> */}
    //   {/* <LogIn/> */}

    // </div>
      
  );
}

export default App
