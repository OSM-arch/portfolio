import {configureStore} from "@reduxjs/toolkit";
import adminObj_Slice from "../features/adminObj_Slice";

const store = configureStore({
    reducer: {
        adminObj: adminObj_Slice,
    }
})

export default store;