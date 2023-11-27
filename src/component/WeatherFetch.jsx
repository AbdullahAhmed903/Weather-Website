import React, { useEffect, useState } from "react";
import Display from "./Display.jsx";

function WeatherFetch({ data, setData, apiKey, location }) {
  const [loading, setLoading] = useState(true);
  const [errrr, seterrrr] = useState("");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          seterrrr(response.status);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        // Handle any errors that occurred during the fetch.
        console.error("Fetch error:", error);
      });
    setLoading(false);
    return () => {
      return false;
    };
  }, [location]);
  return (
    <>
      {console.log(data)}
      {console.log(new Date(1700893639 * 1000))}
      <Display data={data} />
    </>
  );
}

export default React.memo(WeatherFetch);
