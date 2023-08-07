import { BeatProps } from "../services/beat"

function BeatCard({ title, price, imageURL, author, audioURL }: BeatProps) {
    return <div className="w-full flex flex-col shadow-lg">
        <div className="bg-gray-500 aspect-square">
            <img className="object-cover w-full aspect-square" src={imageURL} alt={title} />
        </div>
        <div className="p-3 lg:p-6 text-black-text">
            <p className=" text-purple-primary">${price}</p>
            <p className="text-lg">{title}</p>
            <p className="text-sm text-gray-700">{author}</p>
        </div>
        <audio controls>
            <source src={audioURL} type="audio/mpeg" />
            Your browser does not support the audio tag.
        </audio>
    </div>
}

export default BeatCard