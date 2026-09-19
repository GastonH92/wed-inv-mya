import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import OurStory from "./components/OurStory/OurStory";
import CountdownSection from "./components/Countdown/CountdownSection";
import EventInfo from "./components/EventInfo/EventInfo";
import DressCode from "./components/DressCode/DressCode";
import Gifts from "./components/Gifts/Gifts";
import Gallery from "./components/Gallery/Gallery";
import RSVP from "./components/RSVP/RSVP";
import Footer from "./components/Footer/Footer";



export default function Home() {
  return (
       <>
          
       <Navbar/>
       <Hero/>
       <OurStory/>
       <CountdownSection/>  
       <EventInfo/>
       <DressCode/>
       <Gifts/>
       <Gallery/>
       <RSVP/>
       <Footer/>
       
       
       
       
       
       
       
       </>
    
  );
}
