import { configureStore } from "@reduxjs/toolkit";
import {createSlice} from '@reduxjs/toolkit'

const collectionSlice = createSlice({
    name:'collections',
    initialState:{collections:[]},
    reducers:{
        setCollections(state,action){
            state.collections = action.payload
        },      


    }
})
const taskSlice = createSlice({
    name:'tasks',
    initialState:{tasks:[]},
    reducers:{
        setTasks:(state,action)=>{
            state.tasks = action.payload
        }, 
        editTask:(state,action)=>{
            const index = state.tasks.findIndex(task=>task.id===action.payload.id)
            state.tasks[index].title = action.payload.title
        }, 
        deleteTask:(state,action)=>{
            const index = state.tasks.findIndex(task=>task.id===action.payload)
            state.tasks.splice(index,1)
        },      


    }
})



const store = configureStore({
    reducer:{
        collection:collectionSlice.reducer,
        task:taskSlice.reducer

        
    }
})
export const actions = { collectionAction:collectionSlice.actions,taskAction:taskSlice.actions}
export default store