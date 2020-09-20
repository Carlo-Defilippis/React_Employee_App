import React from "react";
import ReactDOM from "react-dom";
import User from "./User";
import axios from "axios";
import MaterialTable from "material-table";

// 'Outer' component that will contain all the User 'cards'
class UserGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = { users: [] };
    }

    // Runs when component is mounted
    componentDidMount() {
        // Get data for 100 users { users: response.data.results }
        axios
            .get("https://randomuser.me/api/?results=100")
            .then(response => {
                console.log(response.data.results)
                this.setState({ users: response.data.results });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const userList = this.state.users.map(u => (
            <User
                key={u.email}
                name={u.name.first}
                last={u.name.last}
                age={u.dob.age}
                image={u.picture.medium}
                quote={u.quote}
            />
        ));
        console.log(this.state.users.age)
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {userList}
                </tbody>
            </table>
        )
    }
}

ReactDOM.render(<UserGrid />, document.getElementById("root"));


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));
