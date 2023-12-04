import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from "axios";
mapboxgl.accessToken ='pk.eyJ1Ijoicm9iZXJ0bXVsZG9vbmZ5cCIsImEiOiJjbHBlajVqejIxZDc5MmhybGZha3N3dGF3In0.EmdczNp0fNiA_es8l1-y9Q'
function App() {
  const [map, setMap] = useState(null);
  

  useEffect(() => {
    const initializeMap = () => {
      const mapInst = new mapboxgl.Map({
        container: 'map',
        style:'mapbox://styles/mapbox/streets-v12',
        center: [-9.0105, 53.2787],
        zoom: 9,
      });
      setMap(mapInst);
    };
    if (!map) {
      initializeMap();
    }
  },[map]);

  return (
    <div>
    <div id="map" style={{ width: '100%', height: '800px' }}></div>
    </div>
  );
}

export default App;
