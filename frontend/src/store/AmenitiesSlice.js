import { createSlice } from "@reduxjs/toolkit"

export const amenitiesSlice = createSlice({
    name: 'amenities',
    initialState: {
        value: [],
    },
    reducers: {
        setAmenities: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setAmenities } = amenitiesSlice.actions;
export default amenitiesSlice.reducer;