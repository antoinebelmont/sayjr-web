import React from "react";
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";

const Map = ({ location, zoom, handleDrag,draggable }) => (
    <div>
        <GoogleMap
            zoom={zoom}
            center={{ lat: location.latitude, lng: location.longitude }}
            isMarkerShown={true}
        >
            <Marker
                position={{ lat: location.latitude, lng: location.longitude }}
                draggable={draggable}
                onDragEnd={(t, map, coord) => {handleDrag(t.latLng)}}
                // onDragEnd={(t, map, coord) => onMarkerDragEnd(coord, index)}
            />
        </GoogleMap>
    </div>
);

export default withGoogleMap(Map);
