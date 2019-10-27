import React from 'react'

const Figures = ({ figures }) => {
    return (
        <div>

            {figures.map((figure) => (
                <div class="card" key={figure.id}>
                    <div class="card-body">
                        <h5 class="card-title">{figure.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{figure.email}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{figure.data}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Figures