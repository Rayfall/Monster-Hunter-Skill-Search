import React, { useState, useContext } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { DataContext } from "../App";

function Form(props) {
  const dataContext = useContext(DataContext);

  const [input, setIntput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(input);
    setIntput("");
  };

  const handleChange = e => {
    setIntput(e.target.value);
  };
    return (
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={input}
          type="text"
          placeholder={props.placeholderText}
        />
        <button>Search</button>
        
      </form>
    )
  
}

export default Form;