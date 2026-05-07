import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

function App(){
  const [users, setusers] = useState([]);
  const [name, setname] = useState("");
  const [age, setage] = useState("");

  const Api = "";

  const fetchusers = async() => {
    try{
      const res = await axios.get(`${Api}/users`);
      setusers(res.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect( () => {
    fetchusers();
  }, []);

  const addUser= async() => {
    try{
      await axios.post(`${Api}/users`, {
        name: name,
        age: age,
      });

      setname("");
      setage("");
      fetchusers();
    }catch(err){
      console.log(err)
    }

  }

  const deleteUser = async(id) => {
    try{
      await axios.delete(`${Api}/users/${id}`)
      fetchusers()
    }catch(err){
      console.log(err)
    }
  }

  const updatedUser =  async(id) => {
    try{
      await axios.put(`${Api}/users/${id}`,{
        name: name,
        age: age,
      }
      )
      setage("");
      setname("");
      fetchusers();
    }catch(err){
      console.log(err)
    }
  }

  return(
    <div>
      <input  value={name} onChange={(e) => setname(e.target.value)} />
      <input value={age} onChange={(e) => setage(e.target.value)} />
      <button onClick={addUser}>ADD</button>

      <ul>
        {
          users.map((u) => (
            <li key = {u.id}>
              {u.name} ({u.age})
              <button onClick={() => deleteUser(u.id)}>Delete</button>
              <button onClick={() => updatedUser(u.id)}>Update</button>
            </li>
          ))
        }
      </ul>
    </div>

   
  )


}

export default App;
