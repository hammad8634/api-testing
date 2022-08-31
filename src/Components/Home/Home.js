// import React, { Component } from "react";
import "../../App.css";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     };
//   }

//   componentDidMount() {
//     fetch("https://massab-hammad.herokuapp.com/api1/users/login")
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           isLoaded: true,
//           items: json,
//         });
//       });
//   }

//   render() {
//     var { isLoaded, items } = this.state;

//     if (!isLoaded) {
//       return <div>Loading......</div>;
//     } else {
//       return (
//         <div className="App-main">
//           <ul>
//             {Array.from(items.data).map((item) => (
//               <li key={item._id}>
//                 <div>ID: {item._id}</div>
//                 <div>Name: {item.username}</div>
//                 <div>Email: {item.email}</div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       );
//     }
//   }
// }

// export default Home;

import React from "react";

const Home = () => {
  return (
    <div className="main-home">
      <div className="home-container">
      <h2>Add a border to a table:</h2>
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
        </tr>
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
        </tr>
      </table>
    </div>
    </div>
  );
};

export default Home;
