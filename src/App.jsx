import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
// import { FloatingButton } from "./components/FloatingButton.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <Toaster 
      position="bottom-right"
      gutter={24}
      toastOptions={{
        className: '',
        style: {
          background: '#333',
          color: '#fff'
        },
      }}
      />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
