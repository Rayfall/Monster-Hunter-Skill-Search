import React, { useContext } from "react"
import { DataContext } from "../App";

export default function Skill(props) {
    const dataContext = useContext(DataContext);

    console.log("Handle_Search - Props.skill", props.skill);
    const userSkill = props.skill;
    const armorSets = dataContext.armor.map((piece,index) => {
        let results = piece.rank === "master" ? piece : "N/A";
        return results;
    });

    const skills = dataContext.skillset.map((skill,index) => {
        return skill
    });

    //const skill = skills.filter(skill => skill.name.toLowerCase() === props.skill.toLowerCase())

    //console.log(skill);

    const search = armorSets.filter(piece => (piece.rank === "master" && piece.skills[0].id === skills[23].id));
    const results = search.map((result,index) => {
    return <li key={index}>{result.type} - {result.armorSet.name}</li>;
    });


    return (
        <>

        </>
    );
}