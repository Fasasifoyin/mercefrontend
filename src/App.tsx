import "./styles/index.scss";
import RoutesPath from "./routes/Routespath";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <RoutesPath />
    </>
  );
}

export default App;
