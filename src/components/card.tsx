function Card({ price }: { price: number }) {
    return <div className="flex flex-col shadow-lg max-w-xs">
        <div className="bg-gray-500 aspect-square w-full"></div>
        <p>{price}</p>
        <p>Arce beat madness</p>
        <p>tom cruise</p>
    </div>
}

export default Card