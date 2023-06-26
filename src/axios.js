import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-app-13296.cloudfunctions.net/api",

  // "http://localhost:5001/clone-app-13296/us-central1/api",
});

export default instance;
