import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default function getData() {
return axios.get("https://randomuser.me/api/?results=100")
  .then(response => {
    console.log("This is the API clg:", response.data.results)
    this.setState({ users: response.data.results });
  })
  .catch(err => {
    console.log(err);
  })
}
