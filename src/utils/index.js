import axios from "axios";

export async function getMarkers() {
  const { data: locations } = await axios.get("/api/tourism"); // ES6 destructuring & aliasing
  const markers = locations.map((l) => ({
    position: {
      lat: l.latitude,
      lng: l.longitude,
    },
    key: l.name,
    defaultAnimation: 2,
  }));
  return markers;
}
