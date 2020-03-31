import React, { useState, useEffect, createContext } from "react";
import Header from "./Main/Header"
import Main from "./Main/Main"
import Footer from "./Main/Footer"
import './styles/App.css';

export const DataContext = createContext();

function App() {
  const [skillset, setSkillset] = useState([]);
  const [armor, setArmor] = useState([]);

  useEffect(() => {
    const armorURL = "https://mhw-db.com/armor";
    const skillsetURL = "https://mhw-db.com/skills";
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

    makeArmorAPICall();
    makeSkillAPICall();
  }, []);

  if(armor[0] ? true : false){
  return (
    <div className="App">
    <Header />
    <DataContext.Provider value={{ skillset, armor}}>
      <Main />
    </DataContext.Provider>    
    <Footer />
  </div>
  );
}
// END IF
  else{
    return <h1>Loading</h1>
  }
}

export default App;
