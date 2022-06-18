import AppSeguro from "./components/AppSeguro";
import { CotizadorProvider } from "./context/CotizadorProvider";
function App() {
  return (
    <div>
      <CotizadorProvider value={{}}>
        <AppSeguro />
      </CotizadorProvider>
    </div>
  );
}

export default App;
