import { useDispatch, useSelector } from "react-redux"
import { startAddTodo } from "../../store/todo"
import { useForm } from "../hooks"
import { RiTodoFill } from 'react-icons/ri'


export const TodoAdd = () => {

    const {listTodo} = useSelector(state => state.todo);
    const dispatch = useDispatch();


    const { description, onInputChange, onResetForm } = useForm({description: ''}) 

    const onSubmit = (event) => {
        event.preventDefault();
        if (description.trim().length <= 1) return;

        const id = (listTodo.length !== 0) ? listTodo.slice(-1)[0].id : 0
        const todo = {id: id+1, description: description, checked: false}
        
        dispatch(startAddTodo(todo));
        onResetForm(description);
    }

    return (
        <>

                <form onSubmit={onSubmit}>
                    <div className="md:flex items-center">
                        <div className="relative w-full mr-4 ">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <RiTodoFill className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                            </div>
                            <input
                                value={description}
                                name="description"
                                onChange={onInputChange}
                                type="text" 
                                className="bg-gray-50 max-w-[100%] w-[100%] border pl-10 p-2.5 text-sm rounded-lg shadow-lg border-gray-300 text-gray-900  focus:outline-none focus:ring-1 ring-slate-700 focus:ring-slate-700 focus:border-slate-700 block  "
                                placeholder="What should I do?" 
                                required
                            />
                        </div>
                        <button className="bg-cyan-400 md:max-w-[100px] w-full rounded-md border shadow-md p-2 mt-3 md:mt-0 transition duration-300 border-cyan-400 text-white font-bold  hover:bg-cyan-500 hover:border-cyan-500 hover:text-white">
                            Add Task
                        </button>
                    </div>

                </form>

        </>
    )
}
