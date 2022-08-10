import React, { useState ,useEffect } from "react";
import { useLocation,Outlet  } from "react-router-dom";
import './App.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

function Contact () {

 const {state}=useLocation();

 const[task1, setTask1]=useState(state);
 const[showstatus,setShowtask]=useState(null);

useEffect (()=>{

    //alert(JSON.stringify(task))

},[])
 
const remove = (index) => {
    task1.splice(index, 1);
    setTask1([...task1]);
  };

    return(
        <div className="App">
        
        
        <Form>
      
        <Button   className='button1' variant="success btn-block" type="submit" onClick={(e) => {e.preventDefault();setShowtask(0);}} >Show_Active</Button><br/><br/>
        <Button   className='button1' variant="success btn-block" type="submit" onClick={(e) => {e.preventDefault();setShowtask(1);}}> Show_Completed</Button>
    
        </Form>
     
        <Form>
       
       
        
        {/* <button className="button4" onClick={(e) => {e.preventDefault();setShowtask(0);}}>
              Show_Active
            </button>
    
            <button className="button5" onClick={(e) => {e.preventDefault();setShowtask(1);}}>
              Show_Completed
            </button> */}

    
          
            <div className="app">
        {
            task1?.length > 0 && task1.map((item, index) => {
                return (item.status === showstatus && 
                 
                    <li>
                    Name: &nbsp; &nbsp;{item?.Task && item.Task}  &nbsp; &nbsp;
                    Status:  &nbsp; &nbsp;{item.status} &nbsp;
                    {/* <button onClick={() => remove(index)}>Delete</button> */}
                    </li>
                   
            )})
        }
         
           </div> 
           
    </Form>
        

        </div>
    
      ) 
  };
  
  export default Contact;