import React from 'react';

const EarthquakeFilter = ({ search, onSearchChange }) => {
    /*
        const change = (event) => {
            onSearchChange(event.target.value);
        };
    */
    return (
        <div>
            <h2>Deprem Listesi</h2>
            <input
                className="search"
                type="text"
                placeholder="Arama"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <select name="county" className="custom-select">
                <option>ISTANBUL</option>
                <option>ANKARA</option>
            </select>
        </div>
    );
};

export default EarthquakeFilter;
