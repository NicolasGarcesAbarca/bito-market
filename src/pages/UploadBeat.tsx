import UploadBeatForm from "../components/forms/UploadBeatForm"
import NavBar from "../components/navbar"

function UploadBeat() {
    return <main className="bg-slate-950 min-h-screen">
        <NavBar/>
        <section className="flex flex-col items-center pt-20">
            <div className="container max-w-3xl rounded-lg bg-slate-800 p-16">
                <UploadBeatForm />
            </div>
        </section>
    </main>
}

export default UploadBeat