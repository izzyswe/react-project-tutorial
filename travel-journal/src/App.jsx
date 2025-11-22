//this css will apply to all components that are imported here
import './App.css'
//Importing our components (custom html tags)
import Header from "./components/Header"
import Entry from "./components/Entry"

//importing our images
import Cancun from "./assets/places/cancun.png"
import La from "./assets/places/la.png"
import Paris from "./assets/places/paris.png"
import Toronto from "./assets/places/toronto.png"

function App() {

  return (
    <>
      <Header />
      <Entry
        img={Cancun} 
        titleImg="cancun picture"
        country="Mexico"
        mapUrl="https://shorturl.at/2tr7F"
        title="Mexico - Cancun"
        date="01-01-25"
        description="Resort" />
      <Entry
        img={La}
        titleImg="Los Angles picture"
        country="USA"
        mapUrl="https://shorturl.at/E6Y2P"
        title="Los Angles - California"
        date="01-01-25"
        description="City of Angles" />
      <Entry
        img={Paris}
        titleImg="Paris"
        country="France"
        mapUrl="https://shorturl.at/rxh3Q"
        title="France - Paris"
        date="01-01-25"
        description="Fashion City" />
      <Entry
        img={Toronto} 
        titleImg="Canada - Toronto"
        country="Canada"
        mapUrl="https://shorturl.at/IBURc"
        title="Ontario - Toronto"
        date="01-01-25"
        description="Toronto" />
    </>
  )
}

export default App
