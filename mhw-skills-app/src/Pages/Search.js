import React, {useState, useEffect, useContext} from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Form from "../components/Form";
import Skill from "../components/Handle_Skill_Search"
import { DataContext } from "../App";
import "../styles/Search.css"

export default function Search() {
    const dataContext = useContext(DataContext);
    const [skillData, setSkillData] = useState(dataContext.skillset[0]); 

    const handleSubmit = async s => {
        setSkillData(s);
    }

    return (
    <div className="search-page">
    <h2>Search Skill</h2>
    <Form handleSubmit={handleSubmit} placeholderText={"Search a skill..."}/>
    <Skill skill={skillData}/>
    </div>
    );
}