import { useState } from "react";
import SelectOptions from "./SelectOptions";

const UseEffectHooks: React.FC = () => {
    const [OptionValue, setOptionValue] = useState<string>("");
    const HandleOption = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setOptionValue(e.target.value)
    }
    return <>
        <div className="flex flex-col gap-4 items-center px-3 py-6 rounded-lg shadow-xl bg-white">
            <h1 className="text-black text-lg text-center font-bold mb-5"> <u>Use Effect</u></h1>
            <SelectOptions HandleOption={HandleOption} OptionValue={OptionValue} />
        </div>
    </>
}
export default UseEffectHooks;