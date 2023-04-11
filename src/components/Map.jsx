import React, {useEffect, useState, useRef} from 'react';
import DG from '2gis-maps'

const Map = ({long, lat}) => {
    const options = {
        center: [lat, long],
        zoom: 15
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
            DG.marker([options.center[0], options.center[1]]).addTo(innerMap)

        }
    });

    return (
        <div
            ref={elRef}
            style={{
                width: `300px`,
                height: `300px`
            }}
        />
    );
};

export default Map;