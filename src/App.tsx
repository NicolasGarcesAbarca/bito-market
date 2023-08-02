import NavBar from "./components/navbar"

function App() {

  return (
    <main>
      <NavBar />
      <section className='bg-purple-primary min-h-screen px-20 grid grid-cols-2'>
        <div className="flex flex-col justify-center">
          <div className='text-6xl text-white tracking-wide'>
            <h1 >ENCUENTRA</h1>
            <h1 >LOS</h1>
            <h1 >MEJORES</h1>
            <h1 className='text-cyan-primary'>BEATS</h1>
          </div>
          <div className="mt-8">
            <button className="bg-cyan-primary p-4 text-xl text-black-text">VER BEATS</button>
          </div>
        </div>
      </section>
      <section className="bg-gray-300 h-screen pt-20 px-20">
        <div>
          <h1 className="text-4xl text-center text-black-text">MAS DE 10000 BEATMAKERS</h1>
        </div>
      </section>
    </main>
  )
}

export default App
