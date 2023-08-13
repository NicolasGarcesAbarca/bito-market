import { BeatProps, getListBeats } from "../services/beat"
import BeatCard from "./BeatCard"
import { Spinner } from "flowbite-react"
import { useQuery } from "react-query"
function BeatCatalog() {
    const beatQuery = useQuery<BeatProps[]>({
        queryKey: ["beats"],
        queryFn: getListBeats
    })
    if(beatQuery.error){
        return <div>error</div>
    }
    if (beatQuery.isLoading) {
        return <div>
            <Spinner size="xl" color="purple" />
        </div>
    }
    return <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

        {beatQuery.data ?
            beatQuery.data.map(beat => <BeatCard {...beat} key={beat.audioURL} />)
            : null}
    </div>
}

export default BeatCatalog