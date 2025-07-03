import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{ id: 1, text: "Hello" }]
}

export const todoSlice= createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,actions)=>{
            const todo=
            { id: nanoid(), 
              text: actions.payload }
              state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
        }
    }
})
