import React, {useEffect, useState, useRef} from 'react';
import DG from '2gis-maps'
import styles from '../components/styles/Map.module.css'

const Map = ({long, lat, name}) => {
    const options = {
        center: [lat, long],
        zoom: 16
    }
    const elRef = useRef();
    const [map, setMap] = useState(null);

    useEffect(() => {
        let innerMap = map;
        if (!innerMap) {
            innerMap = DG.map(elRef.current, options);
            setMap(innerMap);
        } else {
            innerMap.setView(options.center, options.zoom);
            DG.marker([options.center[0], options.center[1]]).addTo(innerMap).bindPopup(`Здесь находится ${name}`)

        }
    });
    return (
        <div ref={elRef} className={styles.map}></div>
    );
};

export default Map;