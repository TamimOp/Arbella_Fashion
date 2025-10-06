import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import Newsletter from "./components/common/Newsletter";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
