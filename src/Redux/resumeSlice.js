import { createSlice } from '@reduxjs/toolkit'
import { initial } from '../data/resume'

const resumeSlice = createSlice({
    name: 'counter',
    initialState: {
        final: {}
    },
    reducers: {
        validate: (state, action) => {
            console.log(action.payload);
            state.final = action.payload.formik
        },

    }
})

export const { validate } = resumeSlice.actions
export default resumeSlice.reducer