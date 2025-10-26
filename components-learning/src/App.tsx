import React from 'react';
import './App.css';
import ButtonCheckComponent from './Button';
import Counter from './IncrementComponent';
import ClassCounter from './MyClassComponent';
import DataBindingComponent from './DataBindingComponent';
import ParentComponent from './ParentComponent';
import WelcomeMessage from './WelcomeMessage';
import Greeting from './Greeting';
import ConditionalRendering from './ConditionalRendering';
import ItemList from './ListUsage';
import ArrayTraversal from './ArrayTraversal';

function App() {
  return (
    <div className="App">
      <ButtonCheckComponent/>
      <Counter/>
      <ClassCounter/>
      <DataBindingComponent/>
      <ParentComponent/>
      {/* <WelcomeMessage isLoggedIn={false}/> */}
      {/* <Greeting isLoggedIn={true} isAuthorized={true}/> */}
      <ConditionalRendering isLoggedIn={true}/>
      <ItemList />
      <ArrayTraversal />

  
    </div>
  );
}

export default App;
