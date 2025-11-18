import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./authConfig"; // Your MSAL config file

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VisionSection from './components/VisionSection';
import ContactStats from './components/ContactStats';

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <div>
        <Header />
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ContactStats />
      </div>
    </MsalProvider>
  );
}

export default App;














// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import AboutSection from './components/AboutSection';
// import VisionSection from './components/VisionSection';
// import ContactStats from './components/ContactStats';
// // import Footer from './components/Footer';
// // import FeaturesSection from './components/FeaturesSection';

// function App() {
//   return (
//     <div>
//       <Header />
//       <HeroSection />
//       <AboutSection />
//       <VisionSection />
//       <ContactStats />
//       {/* <ServiceHighlights /> */}
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;