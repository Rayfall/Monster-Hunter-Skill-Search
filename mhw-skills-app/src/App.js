import React, { useState, useEffect, createContext } from "react";
import Header from "./Main/Header"
import Main from "./Main/Main"
import Footer from "./Main/Footer"
import './styles/App.css';

export const DataContext = createContext();

function App() {
  const [skillset, setSkillset] = useState([]);
  const [armor, setArmor] = useState([]);
  const [armorSet, setArmorSet] = useState([]);

  useEffect(() => {
    const armorURL = "https://mhw-db.com/armor";
    const skillsetURL = "https://mhw-db.com/skills";
    const setURL = "https://mhw-db.com/armor/sets";
    const makeSkillAPICall = async () => {
      const res = await fetch(skillsetURL);
      const json = await res.json();
      setSkillset(json);
    };

    const makeArmorAPICall = async () => {
      const res = await fetch(armorURL);
      const json = await res.json();
      setArmor(json);
    };

    const makeSetAPICall = async () => {
      const res = await fetch(setURL);
      const json = await res.json();
      setArmorSet(json);
    };

    makeArmorAPICall();
    makeSkillAPICall();
    makeSetAPICall();
  }, []);

  if(armor[0] ? true : false){
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>

      <main>
        <DataContext.Provider value={{ skillset, armor, armorSet}}>
          <Main />
        </DataContext.Provider> 
      </main>

      <footer>
        <Footer />
      </footer>      
    </div>
  );
}
// END IF
  else{
    return <h1>Loading</h1>
  }
}

export default App;
