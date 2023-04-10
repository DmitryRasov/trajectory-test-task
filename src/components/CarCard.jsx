import React from 'react';

const CarCard = ({car,handleEdit}) => {
    return (
        <div>
            <div><b>Name:</b> {car.name}</div>
            <div><b>Model:</b> {car.model}</div>
            <div><b>Price:</b> {car.price}</div>
            <button onClick={() => handleEdit(car.id)}>Edit</button>
        </div>
    );
};

export default CarCard;