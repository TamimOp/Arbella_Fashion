import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import Newsletter from "./components/common/Newsletter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Newsletter />
    </BrowserRouter>
  );
}

export default App;
