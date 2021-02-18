import React, { useState, createContext, useContext } from 'react';
import data from './data';

const PersonContext = createContext();

const App = ()=> {
    const [person, setPerson ] = useState(data);

    return(<div className="App component">
        <h1>Main App</h1>
        <PersonContext.Provider value={{person:person, setPerson:setPerson}}>
            <SubComp1/>
        </PersonContext.Provider>
    </div>);
};

const SubComp1 = ()=> {
    const { person } = useContext(PersonContext);

    return(<div className="component">
        <h2>Sub Component 1 : {randomString}</h2>
        <h3>Name: {person.name.title} {person.name.first} {person.name.last}</h3>

        <SubComp2 />
    </div>);
}

const SubComp2 = ()=> {
    const { person } = useContext(PersonContext);

    return(<div className="component">
        <h2>Sub Component 2</h2>
        <h3>Location: {person.location.street} {person.location.city}, {person.location.state}</h3>
        <SubComp3/>
    </div>);
}

const SubComp3 = ()=> {
    const [person, setPerson] = useContext(PersonContext);

    const changeLocation = () =>{
        setPerson({
            ...person,
            location: {
                street: '2323 N 23rd street',
                city: 'Philadelphia',
                state: 'PA'
            }
        });
    }

    const changeName = () => {
        setPerson({
            ...person,
            name: {
                title: "mx",
                first: "I",
                last: "You"
            }
        });
    }

    return(<div className="component">
        <h2>Sub Component 3</h2>
        <button onClick={changeLocation}>Change Location</button>
        <button onClick={changeName}>Change Name</button>
    </div>);
}

export default App;