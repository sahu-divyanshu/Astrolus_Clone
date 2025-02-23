import "./App.css";
import HeroSection from "./components/HeroSection";
import Contacts from "./components/Contacts";
import LatestArticleSection from "./components/LatestArticleSection";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Testimonial from "./components/Testimonial/Testimonial";
import Features from "./components/Features";

function App() {
  return (
    <div className=" box-border w-full h-full flex bg-bg justify-center items-center flex-col">
      <NavigationBar />
      <HeroSection />
      <Features />
      <Contacts />
      <LatestArticleSection />
      <Testimonial />
    </div>
  );
}

export default App;
