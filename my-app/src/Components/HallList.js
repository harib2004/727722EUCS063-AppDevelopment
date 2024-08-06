import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const HallList = ({ city }) => {
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      // Replace this URL with your backend endpoint
      const fetchHalls = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`http://localhost:8080/halls/${city}`);
          setHalls(response.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchHalls();
    }
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Halls in {city}</h2>
      {halls.length > 0 ? (
        <ul>
          {halls.map(hall => (
            <li key={hall.hallId}>
              <h3>{hall.hallname}</h3>
              <p>Price: ${hall.price}</p>
              <p>Capacity: {hall.capacity}</p>
              <p>Address: {hall.address}</p>
              <p>Description: {hall.description}</p>
              <p>Rating: {hall.rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No halls found for {city}</p>
      )}
    </div>
  );
};

HallList.propTypes = {
  city: PropTypes.string.isRequired,
};

export default HallList;