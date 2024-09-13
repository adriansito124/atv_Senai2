import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

const position = [-25.4249407, -49.2723473]

export const Map = () => {
    return (
        <>
            <h2>Mapa</h2>

            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "500px", height: "500px" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Mapa</a> top'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Senai Centro
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}