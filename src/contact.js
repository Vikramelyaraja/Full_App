import './App.css';
import { useState,useEffect,Table } from 'react'; 
import {useNavigate}from 'react-router-dom';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

function contact () {
    return (
        <div className="container">
      <br/>

      {/* <h1 className="shadow-sm text-success mt-2 p-3 text-center rounded">ToDo Task</h1> */}
                <Row className="mt-7">
                    <Col lg={12} md={6} sm={12} >
                        <Form>
                        <Form.Group md={12} controlId="formBasicEmail">
                        <h1  style={{marginLeft:'80px'}}>contact</h1> 
                         
                            </Form.Group><br/>

                            
                        </Form>
                      </Col>
                </Row>      
    </div>

    );
  };

export default contact;  