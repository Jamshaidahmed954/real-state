import React, { useContext, useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import SearchContext from "../../context/SearchContext";

const neighborhoodIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/149/149294.png",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

const homeIconUrl = "https://cdn-icons-png.flaticon.com/128/25/25694.png";

const lots = [
  {
    bounds: [
      [37.8, -122.45],
      [37.801, -122.448],
    ],
    number: 165,
    status: "available",
    size: "5000 sq ft",
  },
  {
    bounds: [
      [37.801, -122.45],
      [37.802, -122.448],
    ],
    number: 166,
    status: "available",
    size: "5500 sq ft",
  },
  {
    bounds: [
      [37.802, -122.45],
      [37.803, -122.448],
    ],
    number: 167,
    status: "sold",
    size: "6000 sq ft",
  },
  {
    bounds: [
      [37.803, -122.45],
      [37.804, -122.448],
    ],
    number: 168,
    status: "available",
    size: "6500 sq ft",
  },
  {
    bounds: [
      [37.797, -122.442],
      [37.798, -122.44],
    ],
    number: 200,
    status: "sold",
    size: "7000 sq ft",
  },
  {
    bounds: [
      [37.791, -122.431],
      [37.792, -122.429],
    ],
    number: 430,
    status: "available",
    size: "7500 sq ft",
  },
];

const neighborhoods = [
  { position: [37.801, -122.4495], name: "Seasons Groves" },
  {
    position: [37.7975, -122.4415],
    name: "Highland Sage + Ridge Sales Gallery",
  },
  { position: [37.7915, -122.4305], name: "Monarch Commons" },
];

const MapSearchHandler = ({ searchQuery }) => {
  const map = useMap();

  useEffect(() => {
    if (!searchQuery) return;

    const lotMatch = lots.find((lot) => lot.number.toString() === searchQuery);
    const neighborhoodMatch = neighborhoods.find((n) =>
      n.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (lotMatch) {
      map.fitBounds(lotMatch.bounds, { padding: [50, 50] });
    } else if (neighborhoodMatch) {
      map.setView(neighborhoodMatch.position, 16);
    }
  }, [searchQuery, map]);

  return null;
};

const HouseMap = () => {
  const { searchQuery } = useContext(SearchContext);

  const center = [37.8, -122.435];

  return (
    <div className="w-full border-2 rounded-md border-gray-400 absolute top-0 left-0 right-0 bottom-0 z-0">
      {/* Map */}
      <MapContainer
        center={center}
        zoom={16}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapSearchHandler searchQuery={searchQuery} />

        {neighborhoods.map((n, index) => (
          <Marker key={index} position={n.position} icon={neighborhoodIcon}>
            <Popup>
              <strong>{n.name}</strong>
            </Popup>
          </Marker>
        ))}

        {lots.map((lot, index) => {
          const center = [
            (lot.bounds[0][0] + lot.bounds[1][0]) / 2, // Latitude center
            (lot.bounds[0][1] + lot.bounds[1][1]) / 2, // Longitude center
          ];

          return (
            <>
              <Rectangle
                key={index}
                bounds={lot.bounds}
                pathOptions={{
                  color: lot.status === "available" ? "green" : "red",
                  weight: 2,
                  fillColor: lot.status === "available" ? "green" : "red",
                  fillOpacity: 0.3,
                }}
              >
                <Popup>
                  <strong>Lot {lot.number}</strong>
                  <br />
                  Size: {lot.size}
                  <br />
                  Status:{" "}
                  <span
                    style={{
                      color: lot.status === "available" ? "green" : "red",
                    }}
                  >
                    {lot.status}
                  </span>
                </Popup>
                {/* Tooltip with home icon and colored status */}
                <Tooltip sticky>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "5px 15px",
                    }}
                  >
                    <img
                      src={homeIconUrl}
                      alt="Home"
                      style={{ width: "16px", height: "16px" }}
                    />
                    <span>Lot {lot.number} - </span>
                    <span
                      style={{
                        color: lot.status === "available" ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {lot.status}
                    </span>
                  </div>
                </Tooltip>
              </Rectangle>

              {/* Display size inside the bounds */}
              <Marker
                position={center}
                icon={L.divIcon({
                  className: "custom-label",
                  html: `<div style="font-size: 12px; font-weight: bold; color: ${
                    lot.status === "available" ? "green" : "red"
                  };">${lot.size}</div>`,
                  iconSize: [60, 20],
                })}
              />
            </>
          );
        })}
      </MapContainer>

      {/* Legend */}
      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      >
        <strong>Legend:</strong>
        <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: "green",
                border: "2px solid green",
                marginRight: "5px",
              }}
            ></div>
            <span>Available</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: "red",
                border: "2px solid red",
                marginRight: "5px",
              }}
            ></div>
            <span>Sold</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search for a lot or neighborhood"
      />
      <HouseMap searchQuery={searchQuery} />
    </div>
  );
};

export default MapComponent;
