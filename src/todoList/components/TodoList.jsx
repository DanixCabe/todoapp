import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { startDeleteTodo, startToggleCheckedTodo } from '../../store/todo';
import { useDispatch } from 'react-redux';

export const TodoList = ({todoActually}) => {
    const dispatch = useDispatch();
    const {id, description, checked} = todoActually;


    const onDelete = (id) =>{
        dispatch(startDeleteTodo(id))
    }

    const toggleChecked = (id) => {
        dispatch(startToggleCheckedTodo(id))

    }

    return (
        <div  className="w-full flex items-center mt-4 rounded-lg border p-4 shadow-xl border-sky-300 bg-sky-300 odd:bg-fuchsia-400 odd:border-fuchsia-400 ">
            <input id="default-checkbox" type="checkbox" checked={checked} onChange={(event) => toggleChecked(id, event)}  className="w-4 h-4 shadow-md text-green-400 bg-gray-100 border-gray-300 rounded focus:ring-green-400 "/>
            <p className={`text-base font-semibold ml-3 ${(checked) ? 'line-through italic opacity-70':''}`}>{description}</p>
            <div className='ml-auto space-x-2 text-white'>
                {/* <button className='border rounded-md p-1 border-orange-400 bg-orange-400 shadow-md'>
                    <AiFillEdit/>
                </button> */}
                <button onClick={() => onDelete(id)} className='border rounded-md p-1 border-red-500 bg-red-500 shadow-md'>
                    <AiFillDelete/>
                </button>
            </div>
        </div>
    )
}
