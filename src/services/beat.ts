import api from "./api"

type Props = {
    title:string
    price:string
    imageURL:string
    audioURL:string
    uid:string
}

export const createBeat = async ({title,price,imageURL,audioURL,uid}:Props) => {
    const data = await api.post('/v1/beat', { title,price,imageURL,audioURL,uid })
    return data
}