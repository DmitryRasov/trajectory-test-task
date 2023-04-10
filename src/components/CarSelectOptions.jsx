import React from 'react';

const CarSelectOptions = ({val, handleChange}) => {
    return (
        <div>
            Sort by:
            <select value={val} onChange={(e) => handleChange(e)}>
                <option value="name">Name</option>
                <option value="model">Model</option>
                <option value="price">Price</option>
            </select>
        </div>
    );
};

export default CarSelectOptions;