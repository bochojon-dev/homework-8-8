import axios from "axios";
const mainURL = axios.create({
  baseURL: "https://bazar.ilyosbekdev.uz",
});

export default mainURL;
