import Header from "./components/Header";
import Hero from "./components/Hero";
import Prediction from "./components/Prediction";
import Interns from "./components/Interns";
import Mentor from "./components/Mentor";
import About from "./components/About";
import Footer from "./components/Footer";
import RecommendParams from "./components/recommendp";
import LoginSignup from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Prediction />
      <RecommendParams/>
      <Interns />
      <Mentor />
      <About />
      <Footer />
    </div>
  );
}

export default App;
