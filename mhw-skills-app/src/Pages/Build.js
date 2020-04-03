import React, {useState, useEffect, useContext} from "react"
import Form from "../components/Form";
import Builder from "../components/Handle_Armor_Search";
import UL from "./User_List"
import { DataContext } from "../App";

export default function Build() {
    const dataContext = useContext(DataContext);
    const [armorData, setArmorData] = useState(dataContext.armor[0]); 

    const handleSubmit = async a => {
        setArmorData(a);
    }

    return (
        <>
        <h2>Build Page</h2>
        <Form handleSubmit={handleSubmit} placeholderText={"Search for set..."}/>
        <Builder armorset={armorData}/>
        </>
    );    
}