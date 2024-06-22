import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tickets: [],
}

export const ticketSlice = createSlice({
  name: 'allTicket',
  initialState,
  reducers: {
    
    addTickets: (state, action) => {
      state.tickets = action.payload
    },
  },
})

export const { addTickets } = ticketSlice.actions

export default ticketSlice.reducer