import React from 'react';
import styles from './styles/SelectSortOptions.module.css'

const CarSelectOptions = ({val, handleChange}) => (
        <div>
            Sort by:
            <select className={styles.select} value={val} onChange={(e) => handleChange(e)}>
                <option value="name">Name</option>
                <option value="model">Model</option>
                <option value="price">Price</option>
            </select>
        </div>
    );
export default CarSelectOptions;