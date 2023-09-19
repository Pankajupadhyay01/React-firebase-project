import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: false
    },
    reducers: {
        checkUser: state => {
            state.user = !state.user
        }
    }
})

export const { checkUser } = userSlice.actions
export default userSlice.reducer