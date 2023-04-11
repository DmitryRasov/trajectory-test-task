import React from 'react';

const CarCard = ({car,handleEdit, handleDelete}) => {
    return (
        <div>
            <div><b>Name:</b> {car.name}</div>
            <div><b>Model:</b> {car.model}</div>
            <div><b>Price:</b> {car.price}</div>
            <button onClick={() => handleEdit(car.id)}>Edit</button>
            <button onClick={() => handleDelete(car)}>Delete</button>
        </div>
    );
};

export default CarCard;