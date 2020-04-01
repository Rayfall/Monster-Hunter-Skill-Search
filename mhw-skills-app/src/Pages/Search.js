import React, {useState, useEffect, useContext} from "react"
import Form from "../components/Form";
import Skill from "../components/Handle_Search"
import { DataContext } from "../App";

export default function Search() {
    const dataContext = useContext(DataContext);
    const [skillData, setSkillData] = useState([]); 

    const handleSubmit = async skill => {
        setSkillData(skill);
    }

    return (
    <>
    <h2>Search Skill</h2>
    <Form handleSubmit={handleSubmit} placeholderText={"Search a skill..."}/>
    <Skill skill={skillData}/>
    </>
    );
}