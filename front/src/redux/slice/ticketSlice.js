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
        
    delTicket: (state, action) => {
      state.tickets = state.tickets.filter(elem=>elem._id!=action.payload)
    },
        
    postTicket: (state, action) => {
      const find = state.tickets.find(elem=>elem._id==action.payload._id)
      if(!find){
        state.tickets=[...state.tickets,action.payload]
      }
    },
            
    editTicket: (state, action) => {
      const index = state.tickets.findIndex(tickets => tickets._id === action.payload._id);
      if (index !== -1) {
        state.tickets[index] = action.payload;
      }
    }
  },
})

export const { addTickets,editTicket,postTicket,delTicket} = ticketSlice.actions

export default ticketSlice.reducer