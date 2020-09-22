import React, { Component, setState, useState } from "react";
import MaterialTable from 'material-table';
import axios from 'axios'

class MatTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        { title: 'Name', field: 'first' },
        { title: 'Surname', field: 'last', initialEditValue: 'initial edit value' },
        { title: 'Title', field: 'title'}],
      data: [[
        {
          first: "",
          last: "",
          title: "",
        }]]
    };
  }


  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=100').then(response => {
      this.setState({
        data: response.data.results
      })
    })
      .catch(function (error) {
        console.log(error);
      })
      this.setState({
        first: this.state.data.map(e => (
        (e.name)
        )),
        last: this.state.data.map(e => (
          (e.name)
        )),
        title: this.state.data.map(e => (
          (e.name)
        ))
      })
  }


  
  render() {
    if (this.state.data.length > 0) {
      console.log("JSON Parse: ", this.state.data);
      };
    

    return (
      <MaterialTable
        title="Employee Search (editable)"
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    );

}
}



export default MatTable;



// var myResults = []
//   api.getEmployees()
//     .then(res => {
//       if (res === 0) {
//         throw new Error("No results found.");
//       }
//       if (res === "error") {
//         throw new Error(res.data.message);
//       }
//       return myResults.push(res.data.results)
//     })
//     .catch(err => err);

// console.log("My Final: ", myResults)
// MaterialTableUsers(myResults)

// import React from "react";

// // Component to represent a single User 'Card' (note: this is a class component so can use state)
// class User extends React.Component {

//   // Define what happens when this componet gets drawn on the UI
//   render() {
//     return (
//           <tr>
//             <th scope="row"><img alt="Profile" src={this.props.image} /></th>
//             <td>{this.props.name}</td>
//             <td>{this.props.last}</td>
//             <td>{this.props.age}</td>
//           </tr>
//     );
//   }
// }

// // Allow this to be imported by another JS file
// export default User;
