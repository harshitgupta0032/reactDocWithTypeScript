import CounterReduce from "./CounteReduce";

const UseReducerHooks = () => {
    return <>
        <div className="flex relative h-fit flex-col gap-4 items-center px-3 py-6 rounded-lg shadow-xl bg-white">
            <h1 className="text-black text-lg text-center font-bold mb-5"><u>UseReducer Hooks</u></h1>
            <CounterReduce/>
        </div>
    </>
}
export default UseReducerHooks;