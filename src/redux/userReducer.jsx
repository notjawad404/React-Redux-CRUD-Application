import { createSlice } from "@reduxjs/toolkit";
import { Users } from "./Data";

const userSlice = createSlice({
    name: 'user',
    initialState: Users,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
