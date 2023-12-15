import Routers from './Routers/Routers';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function App() {
  const initialOptions = {
    clientId:
      'AadvtuhlBaRav1YVav2ERuNZa_70rjR4OEMm2p1A1MOmSGGRKD-YVErNXjBXGOWLM56qySteKDfbMjek',
    currency: 'USD',
    intent: 'capture',
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <Routers />
    </PayPalScriptProvider>
  );
}

export default App;
