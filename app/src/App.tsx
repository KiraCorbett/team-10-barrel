import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from './events/EventList';
import { MOCK_EVENTS } from './events/MockEvents';

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
        <EventList events={MOCK_EVENTS}/>
      </div>
    </div>
  );
}

export default App;
