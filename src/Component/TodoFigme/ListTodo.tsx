import DeleteUpdateButt from "./DeleteUpdateButt";
import { UseTodo } from "./ContextProvider/ContextProvider";

interface todoType {
    id: string;
    text: string,
    complete: boolean
}
const ListTodo: React.FC = () => {
    const { TodoList, setTodoList } = UseTodo();
    


    const handleCheck = (textId: string) => {
        setTodoList((prev: any) => prev.map((item: any) => item.id === textId ? { ...item, complete: !item.complete } : item))
    }

    return <>
        <div className="flex flex-col gap-4 mt-2">
            {
                TodoList.map((item: todoType) => {
                    return <div key={item.id} className="flex justify-between px-3 items-center border-b-[2px] border-b-gray-300 py-4">
                        <div className="flex gap-3 items-center w-72 ">
                            <input type="checkbox" className="h-6 w-6 cursor-pointer" checked={item.complete} onChange={() => handleCheck(item.id)} />
                            {
                                item.complete ?
                                    <h1 className="text-lg text-red-600 font-medium line-through">{item.text}</h1>
                                    :
                                    <h1 className="text-lg font-medium">{item.text}</h1>
                            }
                        </div>
                        <div>
                            {
                                item.complete ?
                                    <div className="h-4 w-4 bg-orange-600 rounded-full"></div>
                                    :
                                    <DeleteUpdateButt textid={item.id} />
                            }
                        </div>
                    </div>
                })
            }

        </div>
    </>
}
export default ListTodo;