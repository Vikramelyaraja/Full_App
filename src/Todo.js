
import './App.css';
import { useState,useEffect,Table } from 'react'; 
import {useNavigate}from 'react-router-dom';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

function App () {
const navigate=useNavigate();
const [Task, setTask] = useState('');
const [currentDate, setCurrentDate] = useState('');
const [currentTime, setCurrentTime] = useState('');
const [count, setCount]=useState(0);
const [taskList, settaskList] = useState([]);
const [inputstate, setinputstate] = useState('');



const [showstatus, setshowstatus] = useState(null);


  const handleinputchange = (Task) => {
    setinputstate(Task.target.value)
  }

  const addtasklist = () => {
    if(inputstate===""){
      alert('Enter Task')
    }
    else{
    settaskList((oldData) => {
      //return must
      return ([...oldData, {'Task': inputstate, 'createdDateTime': currentDate, 'status': 0 }])
    })
    alert('Inserted success')
  }
  setinputstate('');
  
}


const deletetasklist = (index) => {

  settaskList((items) => items.filter((_, i) => i !== index));
  
  alert('delete success')

}

// useEffect(() => {
//   alert('deleted success');
// }, [taskList]);


const updatetasklist = (index) => {
 
settaskList((oldData)=>{
oldData[index].status=1;
return [...oldData]
})


}


  // useEffect(() => {
  //   alert('Added success');
  // }, [taskList]);

  

  useEffect(() => {
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear(); 
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    var sec = new Date().getSeconds(); 
    setCurrentDate(
      date + '/' + month + '/' + year + hours + ':' + min + ':' + sec
    );
    // setCurrentTime(
    // hours + ':' + min + ':' + sec
    // );


  }, []);


  return (
    <div>
       
      

      <div className="container">
      <br/>

      <h1 className="shadow-sm text-success mt-2 p-3 text-center rounded">ToDo Task</h1>
                <Row className="mt-7">
                    <Col lg={12} md={6} sm={12} >
                        <Form>
                        <Form.Group md={12} controlId="formBasicEmail">
                                <Form.Label>Task</Form.Label>
                          
                                <Form.Control  type="email" placeholder="Enter Task" value={inputstate} onChange={(Task) => handleinputchange(Task)} />
    
                            </Form.Group><br/>

                            
                        </Form>
                      </Col>
                </Row>      <div style={{marginLeft:'17px'}}>
                            <Button   className='button1' variant="success btn-block" type="submit" onClick={() => addtasklist()}>Insert</Button><br/><br/>
                            <Button   className='button1' variant="success btn-block" type="submit"  onClick={() => navigate('/List', { state: taskList })}>View</Button>
                            </div>
    </div>

    
          <div className="container" >
          
            {taskList.map((task,index) => {
               return (
              <>
                <p style={{color:'#fff'}}> Task :{task.Task}</p>
                
                <p style={{color:'#fff'}}> CreatedDate&Time :{task.createdDateTime}</p>
               
                <p style={{color:'#fff'}}>Status : {task.status}</p>
                
                <Button   className='button1' variant="success btn-block" type="submit" onClick={(e) => deletetasklist(index)}>Delete</Button><br/><br/>  
                <Button   className='button1' variant="success btn-block" type="submit" onClick={(e) => updatetasklist(index)}>Update</Button><br/><br/>  
               
            
              </>
               )})}
             
             
          </div>
    </div>
    
    
    
    );
};
export default App;