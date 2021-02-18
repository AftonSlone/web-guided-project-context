import React, { useState, useReducer, createContext, useContext } from 'react';
import data from './data';

import reducer, { initialState } from './reducer';
import { setName, setLocation} from './reducer';

const PersonContext = createContext();
const DogContext = createContext();

const App = ()=> {
    // const [person, setPerson ] = useState(data);
    const [person, dispatch] = useReducer(reducer, initialState);

    return(<div className="App component">
        <h1>Main App</h1>
        <PersonContext.Provider value={{person, dispatch}}>
            <SubComp1/>
        </PersonContext.Provider>

        {/* <DogContext.Provider value={dog}>
            <SubComp1/>
        </DogContext.Provider> */}
    </div>);
};

const SubComp1 = ()=> {
    const { person } = useContext(PersonContext);

    return(<div className="component">
        <h2>Sub Component 1</h2>
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
    const {dispatch} = useContext(PersonContext);

    const changeLocation = () =>{
        dispatch(setLocation('2222 2nd Street', 'Philadelphia', 'PA'));
    }

    const changeName = () => {
        dispatch(setName())
    }

    return(<div className="component">
        <h2>Sub Component 3</h2>
        <button onClick={changeLocation}>Change Location</button>
        {/* <button onClick={changeName}>Change Name</button> */}
    </div>);
}

export default App;