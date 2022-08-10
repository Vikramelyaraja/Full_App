import { useState } from "react"; 
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './App.css';
import {useNavigate} from 'react-router-dom'


const LoginPage = () => {
    const navigate =useNavigate();
  const [inputstate, setinputstate] = useState('');
  const [inputstate1, setinputstate1] = useState('');


  const handleinputchange = (email) => {
    setinputstate(email.target.value)
  }

  const handleinputchange1 = (pass) => {
    setinputstate1(pass.target.value)
  }

  const addtasklist = () => {

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if(inputstate==""|| reg.test(inputstate)==false){
      alert('Enter valid email')
    }else if(inputstate1==""|| inputstate1.length<8|| inputstate1.length>20){
      alert('Enter valid password')
    }
    else {
        navigate('/Dashboard');
  }
  setinputstate('');
  setinputstate1('');
}

    return (
        <div className='container'>
           
                <h1 className="shadow-sm text-success mt-2 p-3 text-center rounded">Login!</h1>
                <Row className="mt-7">
                    <Col lg={12} md={6} sm={12} >
                        <Form>
                            <Form.Group md={12} controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                          
                                <Form.Control  type="email" placeholder="Enter email" value={inputstate} onChange={(email) => handleinputchange(email)} />
    
                            </Form.Group><br/>

                            <Form.Group controlId="formBasicPassword" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control  type="password" placeholder="Password" value={inputstate1} onChange={(pass) => handleinputchange1(pass)}/>
                            </Form.Group><br/><br/>
                          

                            <Button   className='button' variant="success btn-block" type="submit" onClick={() => addtasklist()}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            
        </div>
    );
};

export default LoginPage;

