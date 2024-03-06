import { configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Slices/todoSlicer';
import userREducer from '../Slices/UserSlice'
export const store=configureStore({
    reducer:{
            todo:todoReducer,
            user:userREducer,
    }
})