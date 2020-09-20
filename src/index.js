import React from "react";
import ReactDOM from "react-dom";
import User from "./User";
import axios from "axios";

// 'Outer' component that will contain all the User 'cards'
class UserGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  // Runs when component is mounted
  componentDidMount() {
    // Get data for 100 users
    axios
      .get("https://randomuser.me/api/?results=100")
      .then(response => {
          console.log(response)
        // GET request was successful, store the users in state
        this.setState({ users: response.data.results });
      })
      .catch(err => {
        // GET failed, log the error
        console.log(err);
      });
  }

  render() {
    const userList = this.state.users.map(u => (
      <User
        key={u.name.first}
        name={u.name.first}
        last={u.name.last}
        age={u.dob.age}
        image={u.picture.medium}
        quote={u.quote}
      />
    ));

    return <div className="columns is-multiline">{userList}</div>;
  }
}

ReactDOM.render(<UserGrid />, document.getElementById("root"));


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));
