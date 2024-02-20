import { configureStore } from "@reduxjs/toolkit";
import AmenitiesSlice from "./AmenitiesSlice";

export default configureStore ({
    reducer: {
        amenities: AmenitiesSlice
    }
});
