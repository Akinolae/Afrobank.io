import intState from './initState'
import { createSlice } from '@reduxjs/toolkit'

const reducers = createSlice({
  name: 'user',
  initialState: intState,
  reducers: {
    login: (state, data) => {
      state.payLoad = data.payload
    },
    updateUser: (state, data) => {
      state.payLoad = data.payload
    },
    updateTransactionHistory: (state, data) => {
      state.transactions = data.payload
    },
    updateSignIn: (state, data) => {
      state.isSignedIn = data.payload
    },
    updateUsers: (state, data) => {
      state.users = data.payload
    },
    updateToken: (state, data) => {
      state.token = data.payload
    },
  },
})

export const {
  login,
  updateUser,
  updateUsers,
  updateToken,
  updateSignIn,
  updateTransactionHistory,
} = reducers.actions
export default reducers.reducer
