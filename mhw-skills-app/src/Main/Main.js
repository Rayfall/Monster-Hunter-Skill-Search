import React from "react"

export default function Main(props) {
    if(props.armors[0] ? true : false){
        const armorSets = props.armors.map((piece,index) => {
            let results = piece.rank === "master" ? piece : "N/A";
            return results;
        });
    
        const skillShow = props.skills.map((skill,index) => {
            return skill
        });
    
        const search = armorSets.filter(piece => (piece.rank === "master" && piece.skills[0].id === skillShow[23].id));
        const results = search.map((result,index) => {
        return <li key={index}>{result.type} - {result.armorSet.name}</li>;
        });
        console.log(search);
        console.log("Main - if - [armorSets]", armorSets);
        
        return (
            <div>
                <p>Check the console log for data!</p>
                <p>Armor pieces containing: {skillShow[23].name}</p>
                <ul>
                    {results}
                </ul>
            </div>
        )
      }
    // END IF
      else{
        return <h1>Loading</h1>
      }
}


//<li key={index}>{skill.name}</li>
//return <li key={index}>{result}</li>;