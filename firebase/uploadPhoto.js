import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./config";

export const uploadPhoto = async (image, folder, imageUserId = nanoid()) => {
  const photo = await fetch(image);
  const file = await photo.blob();

  const imagesRef = ref(storage, `${folder}/${imageUserId}`);

  await uploadBytesResumable(imagesRef, file);
  const url = await getDownloadURL(imagesRef);
  console.log("url", url);
  return url;
};
