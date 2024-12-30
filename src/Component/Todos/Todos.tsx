import { useState } from "react";
import SearchBar from "./SearchBar";
import Todolist from "./TodoList";

interface InputText {
    id: number;
    text: string;
}
const Todos: React.FC = () => {
    const [inputText, setInputText] = useState<string>("");
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [updateId, setUpdateId] = useState<number | undefined>();

    const [inputList, setInputList] = useState<InputText[]>([]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }
    const SubmitText = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (inputText) {
            setInputList(prevList => [...prevList, { id: new Date().getTime(), text: inputText }]);
            return setInputText("");
        } else {
            return alert("Please Enter your Input");
        }
    }

    const DeleteInput = (id: number) => {
        if (isUpdate) {
            setInputList((prevList) => {
                setIsUpdate(false);
                setInputText("")
                setUpdateId(undefined);
                return prevList.filter((item) => item.id !== id)
            })
        } else {
            setInputList((prevList) => {
                return prevList.filter((item) => item.id !== id)
            })
        }
    }
    const UpdateInput = (id: number) => {
        const todoItem = inputList.find(item => item.id === id);
        if (todoItem) {
            setIsUpdate(true);
            setUpdateId(id);
            setInputText(todoItem.text);
        }
    }
    const UpdateText = () => {
        if (updateId !== undefined) {
            if (inputText) {

                setInputList(prevList =>
                    prevList.map(item =>
                        item.id === updateId ? { ...item, text: inputText } : item
                    )
                );
                setIsUpdate(false);
                setInputText("");
                return setUpdateId(undefined);
            }else{
                return alert("Enter Your Update Value")
            }
        }
    }
    return (
        <>
            <div className='bg-gray-300 min-h-screen h-fit w-full items-center pt-6 flex flex-col gap-8'>
                <h1 className="text-black font-bold text-lg md:text-xl lg:text-2xl mb-5"> Todos </h1>
                <SearchBar inputText={inputText} handleInput={handleInput} SubmitText={SubmitText} isUpdate={isUpdate} UpdateText={UpdateText} />
                <Todolist deleteInput={DeleteInput} UpdateInput={UpdateInput} inputList={inputList} />
            </div>
        </>
    )
}

export default Todos;