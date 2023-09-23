import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'LogIn',
    initialState: {
        user: true
    },
    reducers: {

        checkUser: state => {
            state.user = true
        },

        Logout: state => {
            state.user = false
        }
    }
})

export const { checkUser, Logout } = userSlice.actions
export default userSlice.reducer