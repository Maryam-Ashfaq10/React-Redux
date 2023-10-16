import { createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : [],
    reducers : {
        //adding data i.e pushing data to the store
        addUser(state, action) {
            state.push(action.payload);
        },
        clearUser(state, action) {},
        deleteAll(state, action) {},
    },
});


export default userSlice.reducer;
export const {addUser} = userSlice.actions;