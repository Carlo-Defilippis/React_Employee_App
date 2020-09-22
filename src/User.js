import React, { Component } from "react";
import MaterialTable from 'material-table';
import axios from 'axios'
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded';
import FlipCameraIosIcon from '@material-ui/icons/FlipCameraIos';

// Initial class to export table to be rendered later
class MatTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        { title: 'Title', field: 'title'},
        { title: 'First Name', field: 'first' },
        { title: 'Last Name', field: 'last', initialEditValue: 'initial edit value' },
        { title: 'Age', field: 'age', type: 'numerical'},
        { title: 'Location', field: 'state'},
        { title: 'Email', field: 'email'},
      ],
      data: [[
        {
          first: "",
          last: "",
          title: "",
          age: 0,
          large: "",
          state: "",
          email: "",
        }]]
    };
  }

  // Makes sure all components mount before rendering
  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=100&nat=us').then(response => {
      console.log(response.data.results)
      var dataRows = [];
      response.data.results.forEach((item, i) => {
        let myData = {
          ...item.name,
          ...item.dob,
          ...item.picture,
          ...item.location,
          ...item
        }
        dataRows.push((myData));
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

  // Renders the table on page after components are mounted
  render() {

    return (
      <MaterialTable align="left"
        title="Employee Search"
        columns={this.state.columns}
        data= {this.state.data}
        detailPanel={[ 
        {
      icon: PhotoCameraRoundedIcon,
      openIcon: FlipCameraIosIcon,
      tooltip: 'Show Picture',
      render: (rowData) => {
        console.log("Row data: ", rowData)
        return (
          <img
            height="315"
            src={rowData.large}
            alt="profile"
          />
        )
      },
    },
  ]}
    />
    );

}
}

export default MatTable;

