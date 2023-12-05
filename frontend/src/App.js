import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9iZXJ0bXVsZG9vbmZ5cCIsImEiOiJjbHBlajVqejIxZDc5MmhybGZha3N3dGF3In0.EmdczNp0fNiA_es8l1-y9Q";
function App() {
  const [map, setMap] = useState(null);
  const [pins, setPins] = useState([]);

  useEffect(() => {
    const initializeMap = () => {
      const mapInst = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-9.0105, 53.2787],
        zoom: 9,
      });
      setMap(mapInst);
    };
    if (!map) {
      initializeMap();
    }
  }, [map]);

  useEffect(() => {
    const getPins = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/pins");
        setPins(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  useEffect(() => {
    if (map && pins.length > 0) {
      pins.forEach((pinData) => {
        const pin = new mapboxgl.Marker()
          .setLngLat([pinData.long, pinData.lat])
          .addTo(map);
        pin.setPopup(
          new mapboxgl.Popup().setHTML(`<h3>${pinData.sheepId}</h3>`)
        );
        pin.getElement().addEventListener("click", () => {
          pin.togglePopup();
        });
      });
    }
  }, [map, pins]);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "800px" }}></div>
    </div>
  );
}

export default App;
