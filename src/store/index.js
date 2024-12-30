import {configureStore} from '@reduxjs/toolkit'
import { expenseSlice } from './slices/expense-slice'

export const store = configureStore({
    reducer: { 
        EXPENSE :expenseSlice.reducer,
    },
})