import "./App.css";
import React, { useEffect, useState } from "react";



export default function App() {
  const [users, setUsers] = useState([]);
  const [theme,setTheme] = useState("light")
  const LightTheme ={
    background: "white",
    fontColor: "black"
  }
  const DarkTheme ={
    background: "black",
    fontColor: "white"
  }
  const themes= {
    light: LightTheme,
    dark: DarkTheme
  }
  const columns=[
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Age',
    accessor: 'age'
  },
  {
    Header: 'Phone No.',
    accessor: 'phone no.'
  },
  {
    Header: 'Email',
    accessor: 'email'
  }
  
  
  ]

  const fetchData = async () => {
    const res = await fetch("https://randomuser.me/api/?results=500");
    const data = await res.json();
    setUsers(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  function handleTheme(){
    let element =document.body;
    element.classList.toggle('dark')
  }
  // daata.results.map(getDetails)
  // function getDetails(item){
  //   return
  //       console.log([item.name.title+item.name.first+item.name.last,item.gender,item.registered.phone].join(" "))
  // }

  return (
    <div className="App">
      <button onClick={handleTheme} style={{position:"left"}}>Light/Dark Mode</button>
      {/* <button onClick={console.log(users)}>Click Me</button> */}
      {/* <div>
        {
          <ul>
            {(users).map((user) => (
              <li key={user.phone}>{(user.gender)}</li>
            ))}
          </ul>
        }
      </div> */}
      <table style={{width: "100%"}}>
        <tr className='header'>
          <th>Name</th>
             {/* className='header'><div>Name</div> <div>Gender</div> <div>Age</div> <div>Phone_No.</div> <div>Email</div> */}
          <th>Gender</th>
          <th>Age</th>
          <th>Phone No.</th>
          <th>Email</th>
        </tr>
        {
          <>
            {(users).map((user) => (<tr>
              <td key={user.phone}>{(user.name.title+' '+user.name.first+' '+user.name.last)}</td>
              <td>{user.gender}</td>
              <td>{user.registered.age}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              
              </tr>
            ))}
          </>
        }
      </table>
      <div>
        {/* <ReactTable
          // data={users}
          columns={columns}
        /> */}
      </div>
    </div>
  );
}
