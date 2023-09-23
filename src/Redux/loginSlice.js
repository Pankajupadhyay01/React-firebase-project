import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'Login',
    initialState: {
        currentUser:null
    },
    reducers: {
        isUser: (state,action) => {
            state.currentUser = action.payload        
        }
    }
})

export const { incremented, decremented } = loginSlice.actions
export default loginSlice.reducer