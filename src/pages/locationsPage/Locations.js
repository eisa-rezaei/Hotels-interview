import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  LocationPageContainer,
  LocationPageRateAndPrice,
  StyledLocationPageHotelFeatures,
  StyledLocationPageHotelFooter,
  StyledLocationPageHotelFooterTitle,
  StyledLocationPageHotelInfoContainer,
  StyledLocationPageHotelPrice,
} from "./Locations.styles";
import { HomePageSliderOne } from "../../data/data";
import { Link } from "react-router-dom";

const Locations = () => {
  const [hotelInfo, setHotelInfo] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState([]);
  const InfoHandler = (id) => () => {
    setHotelInfo(true);
    const selectedHotelInfo = HomePageSliderOne.filter(
      (hotel) => hotel.id === id
    );
    setSelectedHotel(selectedHotelInfo);
  };
  return (
    <LocationPageContainer>
      <MapContainer center={[35.7, 51.4]} zoom={10.5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {HomePageSliderOne.map((hotel) => (
          <Marker position={hotel.position} key={hotel.id}>
            <Popup position={hotel.position}>
              <h2>{hotel.title}</h2>
              <h3>{hotel.location}</h3>
              <img
                src={hotel.img}
                alt={hotel.title}
                onClick={InfoHandler(hotel.id)}
              />
              <LocationPageRateAndPrice>
                <span>
                  ${hotel.price} <h4> /Night</h4>
                </span>
                <span>
                  {hotel.rate}
                  <FaStar />
                </span>
              </LocationPageRateAndPrice>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <StyledLocationPageHotelInfoContainer hotelInfo={hotelInfo}>
        {selectedHotel && hotelInfo && (
          <div>
            <img src={selectedHotel[0].img} alt={selectedHotel[0].title} />
            <StyledLocationPageHotelPrice>
              <span>
                <h1>{selectedHotel[0].title}</h1>
                {selectedHotel[0].rate}
                <FaStar />
              </span>
              $ {selectedHotel[0].price}
            </StyledLocationPageHotelPrice>
            <StyledLocationPageHotelFeatures>
              <h4>features :</h4> <span> {selectedHotel[0].features}</span>
            </StyledLocationPageHotelFeatures>
            <p>
              {selectedHotel[0].details.substring(0, 250)} ...{" "}
              <Link to={`/hotelpage/${selectedHotel[0].id}`}> show more</Link>
            </p>
            <StyledLocationPageHotelFooter>
              <StyledLocationPageHotelFooterTitle>
                reserve now!
              </StyledLocationPageHotelFooterTitle>
              <Link to={`/hotelpage/${selectedHotel[0].id}`}> reserve</Link>
            </StyledLocationPageHotelFooter>
          </div>
        )}
      </StyledLocationPageHotelInfoContainer>
    </LocationPageContainer>
  );
};

export default Locations;
