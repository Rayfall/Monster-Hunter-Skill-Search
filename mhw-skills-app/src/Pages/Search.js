import React, {useState, useEffect, useContext} from "react"
import Form from "../components/Form";
import Skill from "../components/Handle_Search"
import { DataContext } from "../App";

export default function Search() {
    const dataContext = useContext(DataContext);
    const [skillData, setSkillData] = useState(dataContext.skillset[0]); 

    const handleSubmit = async s => {
        setSkillData(s);
    }

    return (
    <>
    <h2>Search Skill</h2>
    <Form handleSubmit={handleSubmit} placeholderText={"Search a skill..."}/>
    <Skill skill={skillData}/>
    </>
    );
}