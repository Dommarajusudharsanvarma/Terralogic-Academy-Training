import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';
import Card from './card';
import MyClassComponents from './MyClassComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Button name="Sudharsan"/> 
        <Button name="ReactJS"/> 
        <Button name="login"/>
        <Card name="Sudharsan" age={21} phoneNumber={234567}/>
        <Card name="Ravi" age={24} phoneNumber={12948573939}/>
        <Card name="Suresh" age={28} phoneNumber={9856367}/>
        <MyClassComponents />
      </header>
    </div>
  );
}
export default App;
