import React, { useState, useContext, createContext, useReducer } from "react";
import { reducer, setLocation, setName } from "./reducer";
import data from "./data";

const PersonContext = createContext();

export default function App() {
  const [person, dispatch] = useReducer(reducer, data);
  return (
    <div className="component">
      <h1>APP COMPONENT</h1>
      <PersonContext.Provider value={[person, setName, setLocation, dispatch]}>
        <SubComponent1 />
      </PersonContext.Provider>
    </div>
  );
}

const SubComponent1 = () => {
  return (
    <div className="component">
      <h2>SUBCOMPONENT 1</h2>
      <SubComponent2 />
    </div>
  );
};

const SubComponent2 = () => {
  const [person] = useContext(PersonContext);
  return (
    <div className="component">
      <h2>SUBCOMPONENT 2</h2>
      <p>
        Name: {person.name.title} {person.name.first} {person.name.last}
      </p>
      <SubComponent3 />
    </div>
  );
};

const SubComponent3 = () => {
  const [person, setName, setLocation, dispatch] = useContext(PersonContext);

  const handleLocation = () => {
    dispatch(setLocation("24 Left Beaver Creek RD", "Minnie", "KY"));
  };

  const handleName = () => {
    dispatch(setName("Mr", "Afton", "Slone"));
  };

  return (
    <div className="component">
      <h2>SUBCOMPONENT 3</h2>
      <p>
        Location: {person.location.street} {person.location.city}{" "}
        {person.location.state}
      </p>
      <button onClick={handleLocation}>Change Location</button>
      <button onClick={handleName}>Change Name</button>
    </div>
  );
};
