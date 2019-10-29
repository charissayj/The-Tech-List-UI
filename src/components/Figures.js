import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Figures = ({ figures }) => {
  const getParams = async person => {
    const response = await axios.get(`/api/details/${person}`);
    console.log(response);
  };
  return (
    <div>
      {figures.map(figure => (
        <Link to={`/details/${figure.full_name}`}>
          <div className="card" key={figure.id}>
            <img
              className="card-img figure-img"
              src={process.env.REACT_APP_API_URL + figure.imgUrl}
              alt="Card"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h5 className="card-title text-white text-shadow">
                {figure.full_name}
              </h5>
              <h6 className="card-subtitle mb-2 text-white text-shadow">
                {"Born " + figure.birth_year}
              </h6>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Figures;
