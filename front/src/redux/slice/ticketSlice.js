import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tickets: [],
  reklams: [],
}

export const ticketSlice = createSlice({
  name: 'allTicket',
  initialState,
  reducers: {
    
    addTickets: (state, action) => {
      state.tickets = action.payload
    },
    addReklams: (state, action) => {
      state.reklams = action.payload
    },
  },
})

export const { addTickets , addReklams} = ticketSlice.actions

export default ticketSlice.reducer