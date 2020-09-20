import React from 'react';
import MaterialTable from 'material-table';
import API from './utils/API'


console.log("This is the API const imported from API in the User.js:",API().then(isAuthenticated => console.log(isAuthenticated)));

export default function MaterialTableUsers() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
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
  