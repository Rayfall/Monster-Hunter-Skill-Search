import React, { useContext } from "react"
import { DataContext } from "../App";

export default function Builder(props) {
    const dataContext = useContext(DataContext);

    if(props.armorset ? true : false) {
    
        const userArmor = props.armorset;
        
        const armor = dataContext.armor.map((piece,index) => {
            let results = piece.rank === "master" ? piece : "N/A";
            return results;
        });

        const sets = dataContext.armorSet.map(set => {let results = set.rank === "master" ? set : "N/A";
        return results;});

        console.log(sets)

        const skills = dataContext.skillset.map((skill,index) => {
            return skill
        });

        const set = sets.filter(set => set.name == props.armorset)[0]
        console.log(set);
        let results = <><p>Type in an exact skill to find armor pieces with the skill...</p></>

        if(set ? true : false) {
            
            const pieces = set.pieces.map((piece,index) => {
                const skill = piece.skills.map((skill,index) => {
                    return (

                    <li key={index}>{skill.skillName}</li>
                    )
                });
                return (
                    <>
                    <li key={index}>{piece.type} - {piece.name}</li>
                    <ul>
                        {skill}
                    </ul>
                    </>
                )
            });

            return (
                <>
                    <img src="https://via.placeholder.com/150"/>
                    <h3>Armor Set: {set.name}</h3>
                    <ul>
                        {pieces}
                    </ul>
                    <button>Run Build</button>                   
                </>
            )
        }
        else {
            return (
                <>
                <img src="https://via.placeholder.com/150"/>
                <h3>Armor Set</h3>
                <p>Description</p>
                <p>Head</p>
                <p>Chest</p>
                <p>Arms</p>
                <p>Waist</p>
                <p>Legs</p>
                <button>Run Build</button>
                </>
            );
            
        }
        
    }
    else {
        return (
            <>
            <img src="https://via.placeholder.com/150"/>
            <h3>Armor Set</h3>
            <p>Description</p>
            <p>Head</p>
            <p>Chest</p>
            <p>Arms</p>
            <p>Waist</p>
            <p>Legs</p>
            <button>Run Build</button>
            </>
        )
        
    }
    
}