import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EarthquakeFilter from './components/EarthquakeFilter';
import EarthquakeList from './components/EarthquakeList';
import './App.css';

const EarthquakeData = () => {
    const [earthquakes, setEarthquakes] = useState([]);
    const [search, setSearch] = useState(''); // Default minimum magnitude

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.orhanaydogdu.com.tr/deprem/kandilli/live'
                );
                setEarthquakes(response.data.result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSearchChange = (value) => {
        setSearch(value);
    };

    const filteredEarthquakes = earthquakes.filter((earthquake) =>
        earthquake.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="list">
            <EarthquakeFilter
                search={search}
                onSearchChange={handleSearchChange}
            />
            <EarthquakeList earthquakes={filteredEarthquakes} />
        </div>
    );
};

export default EarthquakeData;
