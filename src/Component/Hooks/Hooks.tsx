import UseEffectHooks from "./UseEffectHooks/UseEffectHooks";
import UseStateHooks from "./UseStateHook/UseStateHooks";

const Hooks: React.FC = () => {
    return <>
        <div className='bg-gray-300 min-h-screen h-fit w-full flex flex-col  pt-10 items-center gap-6'>
            <h1 className="text-black text-xl font-bold">Hooks in typescript</h1>

            <UseStateHooks />
            <UseEffectHooks />

        </div>
    </>
}
export default Hooks;