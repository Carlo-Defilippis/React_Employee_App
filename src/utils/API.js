import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=100")
  }
}

// //local file
// let users = "http://jsonplaceholder.typicode.com/users";


// export default {
//     getData: function(){
//         return  Axios.get(users).then((res) => {
//             console.log("from apis", res);
//             return res
//         }).catch((error) => {
//             console.log("from apis.jsx", error);
//             []
//         });
//     },
//     getTest: function(){
//         return 'hello';
//     }
//     //add api for weather
// };






// class Apps extends React.Component {
//   componentDidMount(props) {
//     fetch('http://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then((data) => {
//       console.log(data)
//       return data
//     })
//     .catch(console.log)
//   }
// }



// export default Apps;

// export function getData() {
// return axios.get("https://randomuser.me/api/?results=100")
//   .then(response => {
//     console.log("This is the API clg:", response.data.results)
//     let setState;
//     setState = this.setState.bind(this);
//     this.setState({ users: response.data.results });
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }

