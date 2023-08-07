import { useNavigate } from "react-router-dom"
import BeatCatalog from "../components/BeatCatalog"
import NavBar from "../components/navbar"

function Index() {
  const navigate = useNavigate()
  return (
    <main>
      <NavBar />
      <section className='bg-purple-primary min-h-screen px-28 grid grid-cols-1 md:grid-cols-2'>
        <div className="flex flex-col justify-center pb-10">
          <div className='text-6xl text-white tracking-wide text-center md:text-left'>
            <h1 >PUBLICA</h1>
            <h1 >TUS</h1>
            <h1 className='text-cyan-primary'>BEATS</h1>
            <h1 >EN BITO</h1>
          </div>
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="bg-cyan-primary hover:bg-cyan-400 p-4 text-xl text-black-text" onClick={()=>{navigate('/register')}}>INCRIBIRME</button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-gray-300 min-h-screen px-28">
        <div className="py-20">
          <h1 className="text-4xl text-center text-black-text">REVISA EL CATÁLOGO DE BEATS</h1>
        </div>
        <div className="max-w-[1200px]">
          <BeatCatalog />
        </div>
      </section>
    </main>
  )
}

export default Index
