import React,{useState} from "react";

export default function AddStudent(){
    return(
        <div className="container">
            <form>
            
                <div class="mb-3">
                    <label for="name" >Name </label>
                    <input type="text" id="name" placeholder="Enter Your Name"/>
                    
                </div>

                <div class="mb-3">
                    <label for="age" >Age   </label>
                    <input type="text" id="age" placeholder="Enter Your Age"/>
                    
                </div>

                <div class="mb-3">
                    <label for="gender" >Gender </label>
                    <input type="text" id="gender" placeholder="Enter Your gender"/>
                    
                </div>
            
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>


        </div>
        
    )
}