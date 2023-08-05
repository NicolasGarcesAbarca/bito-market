import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

type Props = {
    file: File;
    uuidString: string;
}
export async function uploadFile({ file, uuidString }: Props) {
    const fileRef = ref(storage, `${uuidString}/${file.name}`)
    try {
        await uploadBytes(fileRef, file)
        return true
    } catch (_err) {
        return false
    }
}