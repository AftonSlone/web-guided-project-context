import React from 'react';

const App = ()=> {
    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1 />
    </div>);
};

const SubComp1 = ()=> {
    return(<div className="component">
        <h2>Sub Component 1</h2>
    </div>);
}

export default App;