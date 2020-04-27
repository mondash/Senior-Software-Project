import React from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import s from './Google.module.scss';

const BasicMap = withScriptjs(withGoogleMap(() =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: parseFloat(37.9877645), lng: parseFloat(-87.4962222) }}
  >
    <Marker position={{ lat: 37.9877645, lng: -87.4962222 }} />
  </GoogleMap>,
));

class Maps extends React.Component {

  render() {
    return (
      <div>
        <div className={s.MapContainer}>
          <BasicMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
            loadingElement={<div style={{ height: 'inherit', width: 'inherit' }} />}
            containerElement={<div style={{ height: 'inherit' }} />}
            mapElement={<div style={{ height: 'inherit' }} />}
          />
        </div>
      </div>
    );
  }
}

export default Maps;
