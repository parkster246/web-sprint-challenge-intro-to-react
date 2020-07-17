// Write your Character component here
import React from "react";
import styled from 'styled-components';



const CharacterInfo = styled.div `
 border-top: 2px solid #33FF33;
    margin-top: 40px;
    margin-left: 50px;
    margin-right: 50px;

&:hover {
    background:black;
    color:red;
}
`;

const CharacterContent = styled.div`
font-size: 16px;
margin: 5px;
color: black;
background:red;

&:hover {
    background:black;
    color:red;
}
`;
const CharacterList = (props) => {
    return(
        <CharacterInfo className = "character-info">
            <h2>Character Name: {props.name}</h2>
            <CharacterContent className ="character-content">
                <h3>Films:</h3> {props.films.map(film => <p>{film}</p>)}
            </CharacterContent>
         </CharacterInfo>
        )
};

export default CharacterList;
