import { createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : [],
    reducers : {
       
        addUser(state, action) {
            state.push(action.payload);
        },

        removeUser(state, action) {
            state.splice(action.payload, 1)
        },

        deleteAll(state, action) {
            return [];
            //can also be done using extraReducers
        },
    },
});


export default userSlice.reducer;
export const {addUser, removeUser, deleteAll} = userSlice.actions;