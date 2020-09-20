import React from "react";

// Component to represent a single User 'Card' (note: this is a class component so can use state)
class User extends React.Component {
  
  // Define what happens when this componet gets drawn on the UI
  render() {
    return (
          <tr>
            <th scope="row"><img alt="Profile" src={this.props.image} /></th>
            <td>{this.props.name}</td>
            <td>{this.props.last}</td>
            <td>{this.props.age}</td>
          </tr>
    );
  }
}

// Allow this to be imported by another JS file
export default User;
  