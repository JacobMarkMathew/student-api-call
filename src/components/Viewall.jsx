import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const[studentData,changeStudentData]=useState(
      {"status":"success","data":[]}
    )

      const fetchData=()=>{
        axios.get("http://18.144.111.41/view_all_students.php").then((response)=>{
          changeStudentData(response.data)
        }).catch()

      }
      useEffect(()=>{fetchData()},[])


  return (
    <div>
       
        <Navbar />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                       <h1 align="center">STUDENT VIEW</h1>
                    <table class="table  table-bordered">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">rollno</th>
      <th scope="col">Admission</th>
      <th scope="col">college</th>
    </tr>
  </thead>
  <tbody>
    {studentData.data.map(
        (value,index)=>{
            return(
                <tr>
      
      <td>{value.name}</td>
      <td>{value.id}</td>
      <td>{value.roll_number}</td>
      <td>{value.admission_number}</td>
      <td>{value.college}</td>
    </tr>
            )
        }
    )}
    
   
  </tbody>
</table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewall