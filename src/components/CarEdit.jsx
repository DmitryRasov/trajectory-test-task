import React from 'react';

const CarEdit = ({price, name, model, id, cancel, save, handleName, handlePrice, handleModel}) => {
    return (
        <div>
            <input type="text" value={name} onChange={e => handleName(e)} />
            <input type="text" value={model} onChange={e => handleModel(e)} />
            <input type="number" value={price} onChange={e => handlePrice(e)} />
            <button onClick={() => save(id)}>Save</button>
            <button onClick={() => cancel()}>Cancel</button>
        </div>
    );
};

export default CarEdit;