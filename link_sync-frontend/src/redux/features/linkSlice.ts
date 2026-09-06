import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSaved: false,
}

const linkSlice = createSlice({
    name: "link",
    initialState,
    reducers: {
        setIsSaved(state, action) {
            state.isSaved = action.payload;
        },
    },
})

export const { setIsSaved } = linkSlice.actions;

export default linkSlice.reducer;