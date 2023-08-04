import { addTodo, deleteTodo, toggleTodo } from "./"


export const startAddTodo = (todo) => {
    return async (dispatch) => {
        dispatch(addTodo(todo))
    }
}

export const startDeleteTodo = (id) => {
    return async (dispatch) => {
        dispatch(deleteTodo(id))
    }
}

export const startToggleCheckedTodo = (id) => {
    return async (dispatch) => {
        dispatch(toggleTodo(id))
    }
}