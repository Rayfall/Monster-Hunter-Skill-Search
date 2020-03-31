import React, { useContext } from "react"
import { DataContext } from "../App";

export default function Skill() {
    const dataContext = useContext(DataContext);
    const armorSets = dataContext.armor.map((piece,index) => {
        let results = piece.rank === "master" ? piece : "N/A";
        return results;
    });

    const skillShow = dataContext.skillset.map((skill,index) => {
        return skill
    });

    const search = armorSets.filter(piece => (piece.rank === "master" && piece.skills[0].id === skillShow[23].id));
    const results = search.map((result,index) => {
    return <li key={index}>{result.type} - {result.armorSet.name}</li>;
    });
    console.log(search);
    console.log("Main - if - [armorSets]", armorSets);

    return (
        <>
            <p>Armor pieces containing: {skillShow[23].name}</p>
            <ul>
                {results}
            </ul>
        </>
    );
}