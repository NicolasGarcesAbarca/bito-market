import { getDownloadURL, StorageReference } from "firebase/storage";

export async function getURL(refFile: StorageReference) {
    const url = await getDownloadURL(refFile)
    return url
  }