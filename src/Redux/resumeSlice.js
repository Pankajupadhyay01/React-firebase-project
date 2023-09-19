import { createSlice } from '@reduxjs/toolkit'

const resumeSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 8
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

export const { incremented, decremented } = resumeSlice.actions
export default resumeSlice.reducer