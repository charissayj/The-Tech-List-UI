import React from 'react'

const Figures = ({ figures }) => {
    return (
        <div>

            {figures.map((figure) => (
                <div class="card" key={figure.id}>
					<img class="card-img figure-img" src={process.env.REACT_APP_API_URL + figure.imgUrl} alt="Card image"></img>
                    <div class="card-img-overlay d-flex flex-column justify-content-end">
						<h5 class="card-title text-white text-shadow">{figure.full_name}</h5>
                        <h6 class="card-subtitle mb-2 text-white text-shadow">{"Born " + figure.birth_year}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Figures