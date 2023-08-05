import Card from "../components/card"
import NavBar from "../components/navbar"
const beatIterator = [0, 0, 0, 0, 0, 0, 0, 0]

function Index() {

  return (
    <main>
      <NavBar />
      <section className='bg-purple-primary min-h-screen px-28 grid grid-cols-2'>
        <div className="flex flex-col justify-center pb-10">
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
      <section className="bg-gray-300 min-h-screen px-28">
        <div className="py-20">
          <h1 className="text-4xl text-center text-black-text">REVISA EL CATÁLOGO DE BEATS</h1>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {
            beatIterator.map(beat => <Card price={beat} />)
          }
        </div>
      </section>
    </main>
  )
}

export default Index
