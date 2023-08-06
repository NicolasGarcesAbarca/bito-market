import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getURL } from "./url";

const storage = getStorage();

type Props = {
    imageFile: File;
    audioFile: File;
    email: string;
}
export async function uploadPackAudioImage({ audioFile, imageFile, email }: Props) {
    const audioRef = ref(storage, `${email}/uuid/${audioFile.name}`)
    const imageRef = ref(storage, `${email}/uuid/${imageFile.name}`)
    try {
        await uploadBytes(audioRef, audioFile)
        await uploadBytes(imageRef, imageFile)
        const imageURL = await getURL(imageRef)
        const audioURL = await getURL(audioRef)
        return {audioURL, imageURL}
    } catch (err) {
        console.log(err)
        throw new Error("Hubo un error al subir audio y portada")
    }
}