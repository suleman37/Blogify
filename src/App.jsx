import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Footer/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;