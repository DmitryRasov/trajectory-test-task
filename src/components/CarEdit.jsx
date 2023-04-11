import React from 'react';
import styles from './styles/CarEdit.module.css'

const CarEdit = ({price, name, model, id, cancel, save, handleName, handlePrice, handleModel}) => {
    return (
        <div className={styles.card}>
            <div className={styles.inputs}>
                <b>Name:</b><input type="text" value={name} onChange={e => handleName(e)} />
                <b>Model:</b><input type="text" value={model} onChange={e => handleModel(e)} />
                <b>Price:</b><input type="number" value={price} onChange={e => handlePrice(e)} />
            </div>
            <div className={styles.btns}>
                <button onClick={() => save(id)}>Save</button>
                <button onClick={() => cancel()}>Cancel</button>
            </div>
        </div>
    );
};

export default CarEdit;