import React from 'react'
import './App.css'
import PersonCard from "./components/PersonCard";

const peopleCardArray = [
  {
    firstName: "Michael",
    lastName: "Fisk",
    age: 41,
    hair: "Dirty Blonde",
  },
  {
    firstName: "Rindy",
    lastName: "Fisk",
    age: 40,
    hair: "Light Auburn",
  },
  {
    firstName: "David",
    lastName: "Cook",
    age: 65,
    hair: "none",
  },
  {
    firstName: "Azriel",
    lastName: "Fisk",
    age: 13,
    hair: "Dirty Blonde",
  },
  {
    firstName: "Lisa",
    lastName: "Jordan",
    age: 63,
    hair: "Black",
  },
]

function App() {
  return (
    <div className="App">
      {peopleCardArray.map((personObj, index) => (
        <PersonCard 
        key={index}
        firstName={personObj.firstName}
        lastName={personObj.lastName}
        age={personObj.age}
        hair={personObj.hair}
        />
      ))}
    </div>
  );
}

export default App