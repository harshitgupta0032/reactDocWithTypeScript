
interface SearchInput {
    inputText: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    SubmitText: (event: React.MouseEvent<HTMLButtonElement>) => void
    UpdateText: (event: React.MouseEvent<HTMLButtonElement>) => void
    isUpdate : boolean;
}

const SearchBar: React.FC<SearchInput> = ({ inputText, handleInput, SubmitText, isUpdate, UpdateText }) => {
    return <>
        <div className="flex">
            <input value={inputText} onChange={handleInput} type="text" placeholder="Your todo..." className="outline-gray-400 rounded-l-full text-black px-4 w-44 sm:w-72 lg:w-80 xl:w-96 py-2 md:py-3" />
            {
                !isUpdate ?
                <button onClick={SubmitText} className="bg-white text-black font-normal sm:font-medium  w-20 rounded-r-full h-full py-2 md:py-3 lg:w-28">Add</button>
                :
                <button onClick={UpdateText} className="bg-green-600 text-white font-normal sm:font-medium  w-20 rounded-r-full h-full py-2 md:py-3 lg:w-28">Update</button>
            }
        </div>
    </>
}

export default SearchBar;