import { configureStore } from "@reduxjs/toolkit";
import AmenitiesSlice from "./AmenitiesSlice";
import NotificationsSlice from "./NotificationsSlice";

export default configureStore({
    reducer: {
        amenities: AmenitiesSlice,
        notifications: NotificationsSlice
    }
});
