import CustomHooks from "./CustomHooks/CustomHooks";
import CounterContextHooks from "./UseContextHook/CounterContextHooks";
import ThemeContext from "./UseContextHook/ThemeContext";
import UseContextHook from "./UseContextHook/UseContextHooks";
import UseEffectHooks from "./UseEffectHooks/UseEffectHooks";
import UseStateHooks from "./UseStateHook/UseStateHooks";

const Hooks: React.FC = () => {
    return <>
        <div className='bg-gray-300 min-h-screen h-fit pb-6 w-full flex flex-col  pt-10 items-center gap-6'>
            <h1 className="text-black text-xl font-bold">Hooks in typescript</h1>

            <UseStateHooks />
            <UseEffectHooks />

            {/* start useContext using child */}
            <ThemeContext>
                <CounterContextHooks>
                    <UseContextHook /> {/* this is main component it access all context */}
                </CounterContextHooks>
            </ThemeContext>

            <CustomHooks />
        </div>
    </>
}
export default Hooks;