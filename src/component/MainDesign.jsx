import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function MainDesign({ name, temp,feels_like,desc }) {

  const mask={
    backgroundColor:"rgba(190, 216, 232, .5)"
  }
  return (
    <section className="vh-100"  >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <div className="card bg-dark text-white">
              <div className="bg-image" >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                  className="card-img border border-0"
                  alt="weather"
                />
                <div className="mask" style={mask}></div>
              </div>
              <div className="card-img-overlay text-dark p-5">
                <h3>My Location</h3>
                <h4 className="mb-0">{name}</h4>
                <p className="display-2 my-3">
                  {Number.parseFloat(temp - 273).toFixed(1) || 0}°C
                </p>
                <p className="mb-5">
                  Feels Like: <strong>{Number.parseFloat(feels_like-273).toFixed(1)} °C</strong>
                </p>
                <h5>{desc}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
