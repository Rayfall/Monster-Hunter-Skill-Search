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

        const skill = skills.filter(skill => skill.name==props.skill)[0]
        
        let results = <><p>Type in an exact skill to find armor pieces with the skill...</p></>

        if(skill ? true : false) {
            const search = armorSets.filter(piece => (piece.rank === "master" && piece.skills[0].id === skill.id));
            
            results = search.map((result,index) => {
                return <li key={index}>{result.type} - {result.armorSet.name}</li>;
            });

            const levels = skill.ranks.map((level, index) => {
                return (
                    <li key={index}>
                        Level: {level.level}, {level.description}
                    </li>
                )
            });

            return (
                <>
                    <div>
                        <h3>Skill Information: {skill.name}</h3>
                        <ul>
                            <li>Description: {skill.description}</li>
                            {levels}
                        </ul>
                    </div>
                    <div>
                        <h3>Armor pieces containing: {skill.name}</h3>
                        <ul>
                            {results}
                        </ul>
                    </div>                    
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

/**
 * const skillGallery = skills.map((skill,index)=>{
if(skill.name.toLowerCase().includes(props.skill)){    
let nameCheck = skill.name.replace (' ', '_',)

           
        return(
        <div>        
            <p>{skill.name}</p>
        </div>
        )  
            
        if(skill.name.toLowerCase().includes(props.skill)) {
                console.log(skill);
            }
} }) */