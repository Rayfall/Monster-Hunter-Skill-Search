import React, { useState, useEffect } from "react";
import Header from "./Main/Header"
import Main from "./Main/Main"
import Footer from "./Main/Footer"
import './styles/App.css';

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

  return (
    <div className="App">
    <Header />
    <Main skills={skillset} armors={armor}/>
    <Footer />
  </div>
  );
}

export default App;
