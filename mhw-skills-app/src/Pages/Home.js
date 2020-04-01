import React from "react"
import { Route, Link, Switch } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <div>
               <h4>Build Your Skillset</h4>
               <p>Build according to your skillset desire. Whether you’re looking for an armor with better defense or a longer lifespan, your skillset exists.</p>
               <button><Link to="/build">Find Your Armor</Link></button>
            </div>
            <div>
                <img src="https://via.placeholder.com/150"/>
               <h4>Search for Skills</h4>
               <p>Already know what you’re looking to build? Search for your skillset and create your armor!</p>
               <button><Link to="/search">Find Your Skills</Link></button>
            </div>
            <div>
                <img src="https://via.placeholder.com/150"/>
               <h4>Best Practices</h4>
               <p>Here are some builds to get you started in the right direction, depending on your preferences.</p>
               <button><Link to="/bestPractices">Generate Skills</Link></button>
            </div>
            <div>
               <h4>Featured Builds</h4>
               <div>
                   <img src="https://via.placeholder.com/150"/>
                   <img src="https://via.placeholder.com/150"/>
                   <img src="https://via.placeholder.com/150"/>
               </div>               
            </div>
        </div>
    );
}