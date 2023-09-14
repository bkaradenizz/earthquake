import React from 'react';

const EarthquakeList = ({ earthquakes }) => {
    console.log(earthquakes);
    return (
        <div>
            {earthquakes.map((earthquake) => (
                <span
                    className={`item ${earthquake.mag > 3 ? 'red' : ''}`}
                    key={earthquake._id}
                >
                    <span className="left">{earthquake.mag}</span>
                    <span className="center">{earthquake.title}</span>
                    <span className="right"> {earthquake.date} </span>
                </span>
            ))}
        </div>
    );
};

export default EarthquakeList;
