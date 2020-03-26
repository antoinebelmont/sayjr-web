import React from 'react';
import Map from './Map';

let GoogleMap = ({lat,lon,zoom,handleDrag,draggable}) => (
  

  <div className="row">
    
    <div className="col-md-12">
      <div className="card">
        <div className="header">
          <h4>Google Map</h4>
        </div>
        <div className="content">
          <div style={{ width: '100%', height: '400px', boxSizing: 'border-box' }}>
            <Map
              location={{ latitude: lat, longitude: lon }}
              zoom={zoom}
              draggable={draggable}
              containerElement={
                <div style={{ width: '100%', height: '100%' }} />
              }
              handleDrag={handleDrag}
              mapElement={
                <div style={{ height: `100%`, height: '100%' }} />
              } />
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default GoogleMap;