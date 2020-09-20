import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default axios.create({
  baseURL: "https://randomuser.me/api/",
  responseType: "json"
});
