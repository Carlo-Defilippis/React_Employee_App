import React, { Component, setState, useState } from "react";
import MaterialTable from 'material-table';
import axios from 'axios'
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded';
import FlipCameraIosIcon from '@material-ui/icons/FlipCameraIos';

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
    axios.get('https://randomuser.me/api/?results=100&nat=us').then(response => {
      console.log(response.data.results)
      var dataRows = [];
      response.data.results.forEach((item, i) => {
        dataRows.push((item.name));
      })
      return dataRows
    }).then(dataRows => {
      console.log(dataRows)
      this.setState({
        data: dataRows
      })
    })
      .catch(function (error) {
        console.log(error);
      })
  }

  
  
  render() {
    console.log(typeof this.state.data)
    // const dataRows = [];
    // if (this.state.data.length > 0) {
    //   console.log("JSON Parse: ", this.state.data);

    //   };
      
    // this.setState({
    //   data: dataRows
    // })
    return (
      <MaterialTable align="center"
        title="Employee Search (editable)"
        columns={this.state.columns}
        data= {this.state.data}
        detailPanel={[ 
        {
      icon: PhotoCameraRoundedIcon,
      openIcon: 'favorite',
      closeIcon: FlipCameraIosIcon,
      tooltip: 'Show Picture',
      render: rowData => {
        return (
          <img
            height="315"
            src="https://randomuser.me/api/portraits/women/28.jpg"
          />
        )
      },
    },
  ]}
      //   {rowData => {
      //   return (
      //     <img
      //       height="315"
      //       src="https://randomuser.me/api/portraits/women/28.jpg"
      //     />
      //   )
      // }}
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
