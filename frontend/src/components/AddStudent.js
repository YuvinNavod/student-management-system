import React,{useState} from "react";

export default function AddStudent(){
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');

    function  sendData(e){
        e.preventDefault();
        
        const student ={
            name,
            age,
            gender
        }
        console.log(student);
    }



    return(
        <div className="container">
            <form onSubmit={sendData}>
            
                <div class="mb-3">
                    <label for="name" >Name </label>
                    <input type="text" id="name" placeholder="Enter Your Name"
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}/>
                    
                </div>

                <div class="mb-3">
                    <label for="age" >Age   </label>
                    <input type="text" id="age" placeholder="Enter Your Age"
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}/>
                    
                </div>

                <div class="mb-3">
                    <label for="gender" >Gender </label>
                    <input type="text" id="gender" placeholder="Enter Your Gender"
                    onChange={(e)=>{
                        setGender(e.target.value);
                    }}/>
                    
                </div>
            
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>


        </div>
        
    )
}