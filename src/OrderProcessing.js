// export default OrderProcessing;
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./OrderProcessing.css";

// Fix default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Delivery zone center and radius (in meters)
const deliveryZone = {
  center: { lat: 6.3349, lng: 5.6037 }, // Benin City, Nigeria
  radius: 10000, // 10 km
};

function OrderProcessing() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPizzas = location.state?.selectedPizzas || [];
  const [userLocation, setUserLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [isInDeliveryZone, setIsInDeliveryZone] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(location);
          checkDeliveryZone(location);
        },
        (err) => {
          setError("Unable to fetch your location. Please enable location services.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  const checkDeliveryZone = (location) => {
    const distance = L.latLng(location.lat, location.lng).distanceTo(
      L.latLng(deliveryZone.center.lat, deliveryZone.center.lng)
    );
    setIsInDeliveryZone(distance <= deliveryZone.radius);
  };

  const handleConfirmOrder = () => {
    if (!isInDeliveryZone) {
      alert("Your location or address is outside our delivery zone. Please check and try again.");
      return;
    }
    alert("Thank you for your order! It is being processed.");
    navigate("/"); // Navigate back to the home page after confirmation
  };

  const handleCancelOrder = () => {
    navigate("/"); // Navigate back to the home page
  };

  const handleAddressSubmit = () => {
    if (address.trim() === "") {
      setError("Please enter a valid address.");
      return;
    }
    // For simplicity, use deliveryZone center as address coordinates (mock geocoding)
    const mockAddressLocation = deliveryZone.center; // Replace this with real geocoding
    setUserLocation(mockAddressLocation);
    checkDeliveryZone(mockAddressLocation);
  };
  const totalPrice = selectedPizzas.reduce((total, pizza) => total + pizza.price, 0);

  return (
    <div className="order-processing">
      <h1>Your Order</h1>
          {selectedPizzas.length === 0 ? (
              <>
              <p>No pizzas selected. Please go back and add some pizzas to your order.</p>
              <button className="cancel-button" onClick={handleCancelOrder}>
                      go back
                    </button>
                </>
              
      ) : (
        <div>
          <ul className="order-list">
            {selectedPizzas.map((pizza, index) => (
              <li key={index} className="order-item">
                <img src={pizza.image} alt={pizza.name} />
                <h2>{pizza.name}</h2>
                <p>{pizza.ingredients}</p>
                <p>Price: {pizza.price}€</p>
              </li>
            ))}
          </ul>
          <div className="location">
            <h2>Your Location</h2>
            {error && <p className="error">{error}</p>}
            {userLocation ? (
              <MapContainer
                center={[userLocation.lat, userLocation.lng]}
                zoom={13}
                style={{ height: "300px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[userLocation.lat, userLocation.lng]}>
                  <Popup>Your location</Popup>
                </Marker>
                <Circle
                  center={[deliveryZone.center.lat, deliveryZone.center.lng]}
                  radius={deliveryZone.radius}
                  color={isInDeliveryZone ? "green" : "red"}
                />
              </MapContainer>
            ) : (
              <p>Fetching your location...</p>
            )}
            </div>
            <p className="total">Total: {totalPrice}€</p>
          <div className="address-input">
            <h2>Enter Your Address</h2>
            <input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={handleAddressSubmit}>Submit Address</button>
          </div>
          {!isInDeliveryZone && <p className="error">You are outside our delivery zone.</p>}
          <div className="order-buttons">
            <button className="confirm-button" onClick={handleConfirmOrder} disabled={!isInDeliveryZone}>
              Confirm Order
            </button>
            <button className="cancel-button" onClick={handleCancelOrder}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderProcessing;
