import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <h1>
        Events
      </h1>
      {/* <div className="grid grid-cols-1 gap-4"> */}
      <div>
        <div className="box">
          <div>
            <h1>Name</h1>
            <h1>Location</h1>
          </div>
          <p>Attendees</p>
        </div>
        <div className="box">02</div>
        <div className="box">03</div>
        <div className="box">04</div>
      </div>
    </div>
  );
}

export default App;
