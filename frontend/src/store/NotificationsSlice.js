import { createSlice } from "@reduxjs/toolkit"

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
        value: false,
    },
    reducers: {
        toggleValue: (state) => {
            state.value = !state.value;
        }
    }
})

export const { toggleValue } = notificationsSlice.actions;
export default notificationsSlice.reducer;