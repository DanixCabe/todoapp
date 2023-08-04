import { createSlice } from '@reduxjs/toolkit';

    export const todoSlice = createSlice({
        name: 'todo',
        initialState: {
            listTodo: (!!JSON.parse(localStorage.getItem('todo'))) ? JSON.parse(localStorage.getItem('todo')) : [],
            isSaved: false
        },
        reducers: {
            addTodo: (state, action ) => {
                state.listTodo.push(action.payload);
                state.isSaving = false;
                localStorage.setItem('todo', JSON.stringify(state.listTodo));
            },
            deleteTodo: (state, action ) => {
                state.listTodo = state.listTodo.filter( todo => {
                    if (todo.id !== action.payload){
                        return todo;
                    }
                })
                state.isSaving = false;
                localStorage.setItem('todo', JSON.stringify(state.listTodo));
            },
            toggleTodo: (state, action ) => {
                console.log(action)
                state.listTodo.map( todo => {
                    if (todo.id === action.payload){
                        todo.checked = !todo.checked;
                    }
                })
                state.isSaving = false;
                localStorage.setItem('todo', JSON.stringify(state.listTodo));
            },
            checkSaving : (state) => {
                state.isSaving = true;
            }
        }
});
// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleTodo, checkSaving } = todoSlice.actions;