import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBRK05KyYOGTDsHepOeGcHz8hm0o4l-Z28",
    authDomain: "necxis-bbefa.firebaseapp.com",
    projectId: "necxis-bbefa",
    appId: "1:992328778612:web:0548ed35c3293abafee221",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
