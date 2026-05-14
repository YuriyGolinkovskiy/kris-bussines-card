'use client';

import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Исправление для стандартных маркеров Leaflet в Next.js
const DefaultIcon = L.icon({
  iconUrl: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779834/marker-icon_glkxaw.png',
  shadowUrl: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779834/marker-shadow_fkgkt8.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [27, 39]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const center: [number, number] = [44.894269, 37.316906];

  return (
    <MapContainer
      center={center}
      zoom={9}
      scrollWheelZoom={false}
      className="w-full h-full min-h-[300px] rounded-lg z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Зона 1: До 20 км (Зеленая) */}
      <Circle
        center={center}
        radius={5000}
        pathOptions={{ color: '#22c55e', fillColor: '#22c55e', fillOpacity: 0.2 }}
      >
        <Popup>До 5 км от центра — базовая стоимость</Popup>
      </Circle>

      {/* Зона 2: 20-50 км (Желтая) */}
      <Circle
        center={center}
        radius={20000}
        pathOptions={{ color: '#eab308', fillColor: '#eab308', fillOpacity: 0.1 }}
      >
        <Popup>5-20 км от центра  — +500₽ к стоимости</Popup>
      </Circle>

      {/* Маркер центра */}
      <Marker position={center}>
        <Popup>Кристина Лютик — Кинолог<br/>Анапа и Краснодарский</Popup>
      </Marker>
    </MapContainer>
  );
}
