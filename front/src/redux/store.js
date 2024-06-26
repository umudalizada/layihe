import { configureStore } from '@reduxjs/toolkit'
import ticketReducer from "./slice/ticketSlice.js"
import reklamReducer from "./slice/reklamSlice.js"
import userReducer from "./slice/userSlice.js"
import sliderReducer from "./slice/sliderSlice.js"




export const store = configureStore({
  reducer: {
    allTicket: ticketReducer,
    allReklam: reklamReducer,
    allUser: userReducer,
    allSlider: sliderReducer,



  },
})