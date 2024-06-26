import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sliders: [],
}

export const sliderSlice = createSlice({
  name: 'allSlider',
  initialState,
  reducers: {
    
    addSliders: (state, action) => {
      state.sliders = action.payload
    },
        
    delSlider: (state, action) => {
      state.sliders = state.sliders.filter(elem=>elem._id!=action.payload)
    },
        
    postSlider: (state, action) => {
      const find = state.sliders.find(elem=>elem._id==action.payload._id)
      if(!find){
        state.sliders=[...state.sliders,action.payload]
      }
    },
            
    editSlider: (state, action) => {
      const index = state.sliders.findIndex(sliders => sliders._id === action.payload._id);
      if (index !== -1) {
        state.sliders[index] = action.payload;
      }
    }
  },
})

export const { addSliders,editSlider,postSlider,delSlider} = sliderSlice.actions

export default sliderSlice.reducer