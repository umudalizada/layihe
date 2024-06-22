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
  },
})

export const { addReklams} = reklamSlice.actions

export default reklamSlice.reducer