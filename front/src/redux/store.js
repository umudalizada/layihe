import { configureStore } from '@reduxjs/toolkit'
import ticketReducer from "./slice/ticketSlice.js"

export const store = configureStore({
  reducer: {
    allTicket: ticketReducer,
  },
})