import React from "react"
import Form from "../components/Form";
import Skill from "../components/Handle_Search"

export default function Search() {
    return (
    <>
    <h2>Search Page</h2>
    <Form placeholderText={"Search a skill..."}/>
    <Skill />
    </>
    );
}