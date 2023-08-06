import { BeatProps, getListBeats } from "../services/beat"
import BeatCard from "./BeatCard"
import { useEffect, useState } from "react"
import { Spinner } from "flowbite-react"

function BeatCatalog() {
    const [beatList, setBeatList] = useState<BeatProps[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        async function getBeats() {
            setLoading(true)
            setError(false)
            const beats = await getListBeats()
            setBeatList(beats as unknown as BeatProps[])
            setLoading(false)
        }
        getBeats()
    }, [])

    if (error) return <p>error</p>
    if (loading) {
        return <div>
            <Spinner size="xl" color="purple" />
        </div>
    }

    return <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {beatList.map(beat => <BeatCard {...beat} />)}
    </div>
}

export default BeatCatalog