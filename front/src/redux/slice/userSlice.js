import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const userSlice = createSlice({
  name: 'allUser',
  initialState,
  reducers: {

    addUsers: (state, action) => {
      state.users = action.payload
    },

    delUsers: (state, action) => {
      state.users = state.users.filter(elem=>elem._id!=action.payload)
    },

    postUser: (state, action) => {
      const find = state.users.find(elem=>elem._id==action.payload._id)
      if(!find){
        state.users=[...state.users,action.payload]
      }
    },

    editUser: (state, action) => {
      const index = state.users.findIndex(users => users._id === action.payload._id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    }
  },
})

export const { addUsers,postUser,delUsers,editUser} = userSlice.actions

export default userSlice.reducer