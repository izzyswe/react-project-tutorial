//this css will apply to all components that are imported here
import "./App.css";
//Importing our components (custom html tags)
import Header from "./components/Header";
import Entry from "./components/Entry";
import UserInput from "./components/UserInput";

//importing our images
import Cancun from "./assets/places/cancun.png";
import La from "./assets/places/la.png";
import Paris from "./assets/places/paris.png";
import Toronto from "./assets/places/toronto.png";

//importing reac userState
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([
    {
      id: 1,
      img: Cancun,
      titleImg: "cancun picture",
      country: "Mexico",
      mapUrl: "https://shorturl.at/2tr7F",
      title: "Mexico - Cancun",
      date: "01-01-25",
      description: "Resort",
    },
    {
      id: 2,
      img: La,
      titleImg: "Los Angeles picture",
      country: "USA",
      mapUrl: "https://shorturl.at/E6Y2P",
      title: "Los Angeles - California",
      date: "01-01-25",
      description: "City of Angels",
    },
    {
      id: 3,
      img: Paris,
      titleImg: "Paris",
      country: "France",
      mapUrl: "https://shorturl.at/rxh3Q",
      title: "France - Paris",
      date: "01-01-25",
      description: "Fashion City",
    },
    {
      id: 4,
      img: Toronto,
      titleImg: "Canada - Toronto",
      country: "Canada",
      mapUrl: "https://shorturl.at/IBURc",
      title: "Ontario - Toronto",
      date: "01-01-25",
      description: "Toronto",
    },
  ]);

  const addEntry = (newEntry) => {
    const entry = {
      ...newEntry,
      id: Date.now(),
    };
    setEntries((prev) => [entry, ...prev]);
  };

  return (
    <>
      <Header />
      <UserInput onAddEntry={addEntry} />

      {entries.map((entry) => (
        <Entry
          key={entry.id}
          img={entry.img}
          titleImg={entry.titleImg}
          country={entry.country}
          mapUrl={entry.mapUrl}
          title={entry.title}
          date={entry.date}
          description={entry.description}
        />
      ))}
    </>
  );
}

export default App;
