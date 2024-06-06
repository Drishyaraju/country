// import { useEffect, useState } from "react";

// const CountryCards = ({ name, flagImg, flagAlt }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         padding: "10px",
//         margin: "10px",
//         border: "1px solid black",
//         borderRadius: "8px",
//         width: "200px",
//         height: "200px",
//       }}
//     >
//       <img src={flagImg} alt={flagAlt} style={{ height: "100px", width: "100px" }} />
//       <h2>{name}</h2>
//     </div>
//   );
// };

// export default function Countries() {
//   const API = "https://restcountries.com/v3.1/all";
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const res = await fetch(API);
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await res.json();
//         setCountries(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching countries:", error);
//         setError(error.toString());
//         setLoading(false);
//       }
//     };

//     fetchCountries();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (countries.length === 0) {
//     return <div>No countries available</div>;
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//       }}
//     >
//       {countries.map((country) => (
//         <CountryCards
//           key={country.cca3}  // Add a unique key for each country
//           name={country.name.common}
//           flagImg={country.flags.png}
//           flagAlt={country.flags.alt || `Flag of ${country.name.common}`}
//         />
//       ))}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// const CountryCards = ({ name, flagImg, flagAlt }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         padding: "10px",
//         margin: "10px",
//         border: "1px solid black",
//         borderRadius: "8px",
//         width: "200px",
//         height: "200px",
//       }}
//     >
//       <img src={flagImg} alt={flagAlt} style={{ height: "100px", width: "100px" }} />
//       <h2>{name}</h2>
//     </div>
//   );
// };

// export default function Countries() {
//   const API = "https://restcountries.com/v3.1/all";
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const res = await fetch(API);
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await res.json();
//         setCountries(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching countries:", error);
//         setError(error.toString());
//         setLoading(false);
//       }
//     };

//     fetchCountries();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (countries.length === 0) {
//     return <div>No countries available</div>;
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//       }}
//     >
//       {countries.map((country) => (
//         <CountryCards
//           key={country.cca3}
//           name={country.name.common}
//           flagImg={country.flags.png}
//           flagAlt={country.flags.alt || `Flag of ${country.name.common}`}
//         />
//       ))}
//     </div>
//   );
// }



// import { useEffect, useState } from "react";

// const CountryCards = ({ name, flagImg, flagAlt }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         padding: "10px",
//         margin: "10px",
//         border: "1px solid black",
//         borderRadius: "8px",
//         width: "200px",
//         height: "200px",
//       }}
//     >
//       <img src={flagImg} alt={flagAlt} style={{ height: "100px", width: "100px" }} />
//       <h2>{name}</h2>
//     </div>
//   );
// };

// export default function Countries() {
//   const API = "https://restcountries.com/v3.1/all";
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true); // Initially set loading to true
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const res = await fetch(API);
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await res.json();
//         setCountries(data);
//       } catch (error) {
//         console.error("Error fetching countries:", error);
//         setError(error.toString());
//       } finally {
//         setLoading(false); // Set loading to false regardless of success or failure
//       }
//     };

//     fetchCountries();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Display loading message while fetching data
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (countries.length === 0) {
//     return <div>No countries available</div>;
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//       }}
//     >
//       {countries.map((country) => (
//         <CountryCards
//           key={country.cca3}
//           name={country.name.common}
//           flagImg={country.flags.png}
//           flagAlt={country.flags.alt || `Flag of ${country.name.common}`}
//         />
//       ))}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const CountryCard = ({ country }) => (
    <div className="country-card">
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      <p>{country.name.common}</p>
    </div>
  );

  const content = () => {
    if (loading) {
      return <p>Loading countries...</p>;
    } else if (error) {
      return <p>Error: {error}</p>;
    } else {
      return (
        <ul className="countries-list">
          {countries.map((country) => (
            <li key={country.cca3}>
              <CountryCard country={country} />
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="App">
      {content()}
      <style jsx>{`
        .App {
          font-family: sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }

        .countries-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 80%;
        }

        .countries-list li {
          margin: 10px;
        }

        .country-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          width: 250px; /* Adjust width as needed */
          margin: 0 auto; /* Center cards horizontally */
        }

        img {
          width: 100%;
          height: 150px; /* Adjust height as needed */
          object-fit: cover;
          border-radius: 4px 4px 0 0; /* Rounded top corners */
        }

        p {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default Countries;
