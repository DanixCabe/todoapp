import { useSelector } from "react-redux";
import { TodoAdd, TodoList } from "./todoList/components"


export const TodoListApp = () => {

    const {listTodo, isSaved} = useSelector(state => state.todo);


    return (
        <>

            <div className="flex justify-center py-20 h-screen bg-gradient-to-r from-indigo-800 from-10% via-indigo-700 via-30% to-indigo-600 to-90%">
                <div className="xxs:w-full xs:container">
                    <div className="w-[90%] mx-auto max-w-[540px] ">
                        <TodoAdd/>
                        <div className={`scrollTodo mt-4 max-h-[450px] overflow-auto px-4 pb-4  rounded-lg ${(listTodo.length !== 0) ? 'border border-slate-200' : ''}`}>
                            {
                                (listTodo.length !== 0) ?
                                    listTodo.map((todoActually) => {
                                        return <TodoList key={todoActually.id} todoActually={todoActually}/>
                                    })
                                :
                                ''
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
