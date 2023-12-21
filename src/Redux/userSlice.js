import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'LogIn',
    initialState: {
        user: false,
        id: {}
    },
    reducers: {

        checkUser: state => {
            state.user = true
        },

        Logout: state => {
            state.user = false
        },

        userid: (state, actions) => {
            state.id = actions.payload
        }
    }
})

export const { checkUser, Logout, userid } = userSlice.actions
export default userSlice.reducer