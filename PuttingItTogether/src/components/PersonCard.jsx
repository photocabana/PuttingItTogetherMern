import React, { useState } from 'react'

const PersonCard = (props) => {
    const { firstName, lastName, age, hair } = props;
    const[stateAge, setStateAge] = useState(age) //have to change age to stateAge to make changable {synthetic event}
    return (
        <div className="container">
        <h2>{lastName}, {firstName}</h2>
        <p>Age: {stateAge}</p>
        <p>Hair Color: {hair}</p>
        <button onClick={() => setStateAge(stateAge + 1)}>Aging Button for {firstName} {lastName}</button>
        </div>
    );
}
export default PersonCard