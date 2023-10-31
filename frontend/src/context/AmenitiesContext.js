import React, { useState } from "react";

export const AmenitiesContext = React.createContext();
AmenitiesContext.displayName = "AmenitiesContext";

export const AmenitiesProvider = ({ children }) => {

    const [hotelAmenities, setHotelAmenities] = useState([]);

    return (
        <AmenitiesContext.Provider
            value={{ hotelAmenities, setHotelAmenities }}
        >
            {children}
        </AmenitiesContext.Provider>
    );
};