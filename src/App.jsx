import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkExamples from "./components/WorkExamples";
import ClientReviews from "./components/ClientReviews";
import Technologies from "./components/Technologies";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WorkExamples />
      <ClientReviews />
      <Technologies />
      <Team />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
