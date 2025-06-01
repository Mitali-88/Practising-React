import { createContext, useContext } from "react";
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo completed",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id,todo) => { },
    deleteTodo: (id,todo) => { },
    toggleComplete:(id)=>{ }
})
export const UseTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider