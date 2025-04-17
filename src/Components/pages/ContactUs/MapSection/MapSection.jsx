import mapboxgl from "mapbox-gl";
import "./MapSection.css";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFobW91ZC0wOCIsImEiOiJjbTBzaGd4N3IwZ2hiMmxzNTZ2Y2lwcDJuIn0.X-5hF9U8kToxUqGi2XW6OA";

const MapSection = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [90.379494, 23.747987],
      zoom: 15,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([90.379494, 23.747987])
      .setPopup(new mapboxgl.Popup().setHTML("<h3>Our Office Location</h3>"))
      .addTo(map);

    map.on("load", () => {
      map.resize();
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="map-container">
      <div id="map" className="my-map"></div>
    </div>
  );
};

export default MapSection;
