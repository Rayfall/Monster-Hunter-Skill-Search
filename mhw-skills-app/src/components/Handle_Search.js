import React, { useContext } from "react"
import { DataContext } from "../App";

export default function Skill(props) {
    
    const dataContext = useContext(DataContext);

    if(props.skill ? true : false) {
        
        const userSkill = props.skill;

        const armorSets = dataContext.armor.map((piece,index) => {
            let results = piece.rank === "master" ? piece : "N/A";
            return results;
        });

        const skills = dataContext.skillset.map((skill,index) => {
            return skill
        });

        const skill = skills.filter(skill => skill.name == props.skill)
        
        let results = <><p>Type in an exact skill to find armor pieces with the skill...</p></>
        
        if(skill[0] ? true : false) {
            const search = armorSets.filter(piece => (piece.rank === "master" && piece.skills[0].id === skill[0].id));
            
            results = search.map((result,index) => {
                return <li key={index}>{result.type} - {result.armorSet.name}</li>;
            });

            return (
                <>
                    <h3>Armor pieces containing: {skill[0].name}</h3>
                    <ul>
                        {results}
                    </ul>
                </>
            )
        }
        else {
            return (
                <>
                    {results}
                </>
            );
            
        }
        
    }
    else {
        return (
            <>
            <h3>Type in an exact skill to find armor pieces with the skill...</h3>
            </>
        )
        
    }
    
}