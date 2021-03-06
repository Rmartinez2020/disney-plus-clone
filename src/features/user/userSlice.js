import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    photo: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.name = action.payload;
            state.email = action.payload;
            state.photo = action.payload;
        },
        setSingOut: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
})

export const { setUserLogin, setSingOut } = userSlice.actions;

export const selectUserEmail = (state) =>state.user.email;

export const selectUserPhoto = (state) => state.user.photo;

export const selectUserName = (state) => state.user.name;

export default userSlice.reducer