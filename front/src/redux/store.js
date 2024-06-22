import { configureStore } from '@reduxjs/toolkit'
import ticketReducer from "./slice/ticketSlice.js"
import reklamReducer from "./slice/reklamSlice.js"


export const store = configureStore({
  reducer: {
    allTicket: ticketReducer,
    allReklam: reklamReducer,

  },
})