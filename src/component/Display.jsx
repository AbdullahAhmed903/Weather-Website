import React from "react";
import MainDesign from "./MainDesign.jsx";

export default function Display({ data }) {
  const obj = {};
  const wind = {};
  const weather = {};
  const sys = {};

  if (data.main) {
    let constatnt = data.main;
    obj.temp = constatnt.temp;
    obj.temp_min = constatnt.temp_min;
    obj.temp_max = constatnt.temp_max;
    obj.humidity = constatnt.humidity;
    obj.pressure = constatnt.pressure;
    obj.feels_like=constatnt.feels_like
  
  }
  if (data.wind) {
    wind.speed = data.wind.speed;
    wind.deg = data.wind.deg;
  }
  if (data.weather) {
    (weather.main = data.weather[0].main),
      (weather.description = data.weather[0].description);
  }
  if (data.sys) {
    (sys.country = data.sys.country),
      (sys.sunrise = data.sys.sunrise),
      (sys.sunset = data.sys.sunset);
  }
  return (
    <>
      <MainDesign name={data.name} temp={obj.temp} feels_like={obj.feels_like} desc={weather.description}/>
    </>
  );
}
