import React,{ useState,useEffect } from "react";
import axios from "axios";

export default function AllStudents(){
    const [students,setStudents] = useState([]);

    useEffect(()=>{
        function getStudents(){
            axios.get("http://localhost:8070/Student/").then((res)=>{
                setStudents(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStudents();
    }, [])
    return(
        <dev className ="container">
            <h1>All Students</h1>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col"> Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((students,index)=>(
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{students.name}</td>
                            <td>{students.age}</td>
                            <td>{students.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>    

        </dev>
    )
}         
    