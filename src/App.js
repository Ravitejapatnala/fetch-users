import React, { useState } from "react";

function App() {

  const[data, setData]= useState([]);

  function getUsers(){
    fetch("https://reqres.in/api/users")
    .then((response)=>response.json())
    .then((user)=>setData(user.data))
    .catch((error)=>console.log(error))
  }

  return (
    <div>
      <div>
        <h3>Blue Whales</h3>
        <button onClick={getUsers}>Users List</button>
      </div>
      {
        data && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>

              <tbody>
                {
                  data.map((item)=>(
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        )
      }
    </div>
  )
}

export default App;
