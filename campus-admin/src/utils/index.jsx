import axios from "axios";

const require =axios.create({
  baseURL: "http://localhost:3000",
  timeout:5000,
})