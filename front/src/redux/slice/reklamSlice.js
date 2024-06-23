import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reklams: [],
}

export const reklamSlice = createSlice({
  name: 'allReklam',
  initialState,
  reducers: {

    addReklams: (state, action) => {
      state.reklams = action.payload
    },
    
    delReklams: (state, action) => {
      state.reklams = state.reklams.filter(elem=>elem._id!=action.payload)
    },

    postReklams: (state, action) => {
      const find = state.reklams.find(elem=>elem._id==action.payload._id)
      if(!find){
        state.reklams=[...state.reklams,action.payload]
      }
    },

    editReklam: (state, action) => {
      const index = state.reklams.findIndex(reklams => reklams._id === action.payload._id);
      if (index !== -1) {
        state.reklams[index] = action.payload;
      }
    }
  },
})

export const { addReklams,editReklam,postReklams,delReklams} = reklamSlice.actions

export default reklamSlice.reducer