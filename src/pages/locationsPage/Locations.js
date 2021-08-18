import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  LocationPageContainer,
  LocationPageRateAndPrice,
  StyledLocationPageHotelFeatures,
  StyledLocationPageHotelFooter,
  StyledLocationPageHotelFooterTitle,
  StyledLocationPageHotelImgCt,
  StyledLocationPageHotelInfoContainer,
  StyledLocationPageHotelPrice,
} from "./Locations.styles";
import { HomePageSliderOne } from "../../data/data";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

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

  useEffect(() => {
    centerPositionFinder();
  }, []);

  const centerPositionFinder = () => {
    const positionsX = HomePageSliderOne.map(({ position }) => position[0]);
    const positionsY = HomePageSliderOne.map(({ position }) => position[1]);
    const xCount = positionsX.reduce((acc, x) => {
      acc = acc + x;
      return acc;
    }, 0);
    const YCount = positionsY.reduce((acc, x) => {
      acc = acc + x;
      return acc;
    }, 0);
    const newPosition = [
      xCount / positionsX.length,
      YCount / positionsX.length,
    ];
    return newPosition;
  };

  return (
    <LocationPageContainer>
      <MapContainer
        center={centerPositionFinder()}
        zoom={11}
        scrollWheelZoom={true}
      >
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
            <StyledLocationPageHotelImgCt>
              <img src={selectedHotel[0].img} alt={selectedHotel[0].title} />
              <IoCloseCircleOutline onClick={() => setHotelInfo(!hotelInfo)} />
            </StyledLocationPageHotelImgCt>
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
            <p>{selectedHotel[0].details} </p>
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
