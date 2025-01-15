"use client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
const ShowLocation = ({ lat, lng }) => {
  const position = { lat: lat ?? 53.54992, lng: lng ?? 10.00678 };

  return (
    <APIProvider>
      <Map
        defaultCenter={position}
        defaultZoom={10}
        mapId="DEMO_MAP_ID"
        style={{ height: "200px", borderRadius: "8px" }}
      ></Map>
    </APIProvider>
  );
};

export default ShowLocation;
