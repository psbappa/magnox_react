import React, { Component } from 'react';

class Listings extends Component {
  state = {
    listings: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ listings: data })
      })
      .catch(console.log('data'))
  }

  render() {
    return (
      <div className="container">
        <center><h1>User List</h1></center>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listings.map((listing) => (
              <tr>
                <td>{listing.name}</td>
                <td>{listing.phone}</td>
                <td>{listing.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

// const Listings = ({ listings }) => {
//   return (
// <div className="container">
//   <center><h1>User List</h1></center>

//   <table className='table'>
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Phone</th> 
//         <th>Email</th>
//       </tr>
//     </thead>
//     <tbody>
//     {listings.map((listing) => (
//       <tr>
//         <td>{listing.name}</td>
//         <td>{listing.phone}</td>
//         <td>{listing.email}</td>
//       </tr>
//     ))}
//     </tbody>
//   </table>
// </div>
//   )
// };

export default Listings