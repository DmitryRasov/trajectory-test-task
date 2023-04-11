import React from 'react';
import Map from "./Map";
import styles from '../components/styles/CarCard.module.css'

const CarCard = ({car, handleEdit, handleDelete}) => {
    return (
        <div className={styles.card}>
            <div className={styles.description}>
                <div><b>Name: </b>{car.name}</div>
                <div><b>Model: </b>{car.model}</div>
                <div><b>Price: </b>{new Intl.NumberFormat('ru-RU', {
                    style: 'currency',
                    currency: 'USD'
                }).format(car.price)}</div>
                <div><b>Colour: </b>{car.color}</div>
                <div><b>Latitude: </b>{car.latitude.toFixed(2)}</div>
                <div><b>Longitude: </b>{car.longitude.toFixed(2)}</div>
                <div><b>Id:</b>{car.id}</div>
                <div className={styles.btns}>
                    <button onClick={() => handleEdit(car.id)}>Edit</button>
                    <button onClick={() => handleDelete(car)}>Delete</button>
                </div>
            </div>
            <Map lat={car.latitude} long={car.longitude} name={car.name}/>
        </div>

    );
};

export default CarCard;