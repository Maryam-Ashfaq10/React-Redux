import { createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : [],
    reducers : {
        //adding data i.e pushing data to the store
        addUser(state, action) {
            state.push(action.payload);
        },

        removeUser(state, action) {
            state.splice(action.payload, 1)
        },

        deleteAll(state, action) {
            return [];
        },
    },
});


export default userSlice.reducer;
export const {addUser, removeUser, deleteAll} = userSlice.actions;