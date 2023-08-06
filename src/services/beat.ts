import api from "./api"

export type BeatProps = {
    title: string
    price: string
    imageURL: string
    audioURL: string
    uid: string
    author: string
}

export const createBeat = async ({ title, price, imageURL, audioURL, uid, author }: BeatProps) => {
    const data = await api.post('/v1/beat', { title, price, imageURL, audioURL, uid, author })
    return data
}

export const getListBeats = async () => {
    const res = await api.get('/v1/beats')
    return res.data.data
}