import React, { useState } from 'react';
import data from './data';


const App = ()=> {
    const [person, setPerson ] = useState(data);

    console.log(person);

    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1 person={person} setPerson={setPerson}/>
    </div>);
};

const SubComp1 = (props)=> {
    const { person, setPerson } = props;

    return(<div className="component">
        <h2>Sub Component 1</h2>
        <h3>Name: {person.name.title} {person.name.first} {person.name.last}</h3>

        <SubComp2 person={person} setPerson={setPerson}/>
    </div>);
}

const SubComp2 = (props)=> {
    const { person, setPerson } = props;

    return(<div className="component">
        <h2>Sub Component 2</h2>
        <h3>Location: {person.location.street} {person.location.city}, {person.location.state}</h3>
        <SubComp3 person={person} setPerson={setPerson}/>
    </div>);
}

const SubComp3 = ()=> {
    return(<div className="component">
        <h2>Sub Component 3</h2>
    </div>);
}

export default App;