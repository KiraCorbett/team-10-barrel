import React from 'react';
import { Event } from './Event';
import './EventList.css';

interface EventListProps {
    events: Event[];
}

function EventList({ events }: EventListProps) {
    const items = events.map(event => (
        <div key={event.id} className="box">
            <div>
                <h1>{event.name}</h1>
                <h1>{event.location}</h1>
                <h1>{event.date?.toLocaleString()}</h1>
            </div>
        </div>
    ));
    return <div>{items}</div>;
}

export default EventList;