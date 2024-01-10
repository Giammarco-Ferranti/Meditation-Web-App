import Blog from "./components/Blog";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <>
      <Navbar />
      <Timer />
      <Cards />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
