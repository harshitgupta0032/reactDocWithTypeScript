import Routers from "./Routers/Routers"

const App: React.FC = () => {

  return (
    <>
      <div className='bg-gray-400 min-h-screen h-fit w-full flex flex-col gap-5'>
        <Routers />
      </div>
    </>
  )
}

export default App
