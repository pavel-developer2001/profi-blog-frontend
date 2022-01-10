import axios from "axios";

const token = localStorage.getItem("blog-token");
console.log("TOKEN", token);

export default axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    Authorization: "Bearer " + token,
  },
});
