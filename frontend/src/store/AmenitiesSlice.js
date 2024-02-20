import { createSlice } from "@reduxjs/toolkit"

export const amenitiesSlice = createSlice({
    name: 'amenities',
    initialState: {
        value: [],
    },
    reducers: {
        setAmenities: (state, data) => {
            state.value = [...value, data.value];
        }
    }
})

export const {setAmenities} = amenitiesSlice.actions;

export default amenitiesSlice.reducer;
