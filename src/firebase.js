import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC-yh0BLiqtcZLR8CyNRSu0y9FfvyyRAPg",
  authDomain: "jf-tasks.firebaseapp.com",
  projectId: "jf-tasks",
  storageBucket: "jf-tasks.firebasestorage.app",
  messagingSenderId: "587086158745",
  appId: "1:587086158745:web:62c93e5bef0f4e4a8c5108",
};

const app = initializeApp(firebaseConfig);

let analytics = null;
if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    // Analytics may not be enabled yet
  }
}

export { analytics, logEvent };
