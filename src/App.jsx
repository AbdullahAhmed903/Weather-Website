import { useState } from "react";
import Location from "./component/Location.jsx";
import WeatherFetch from "./component/WeatherFetch.jsx";
import "./styles.css";
function App() {
  const [location, setLocation] = useState("cairo");
  const [data, setData] = useState([]);
  const [apiKey] = useState("fd1c715dda0026cc30b3c129b5db3ebd");
  const containerStyle = {
    backgroundColor: "#f5f6f7",

  };
  return (
      <div style={containerStyle}>
        <Location setLocation={setLocation} />
        <WeatherFetch
          data={data}
          setData={setData}
          location={location}
          apiKey={apiKey}
        ></WeatherFetch>
      </div>

  );
}

export default App;
