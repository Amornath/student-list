import { useState } from "react";
import { useHistory } from "react-router-dom";
import {Form, Col, Row, Button, Container} from "react-bootstrap";


function LoginForm() {

    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [clss, setClass] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { name, roll, clss };
    
        fetch('http://localhost:8000/students/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(student)
        }).then(() => {
          
          setIsPending(true);
          history.push('/');
    
        })
      }
    return ( 
        <Container className="mb-5">
            <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
                Name
            </Form.Label>
            <Col sm={10}>
                <Form.Control
                 type="text"
                 placeholder="Name"
                 onChange={(e) => setName(e.target.value)}
                />
            </Col>
            </Form.Group>
        
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
                Roll Number
            </Form.Label>
            <Col sm={10}>
                <Form.Control 
                type="number"
                placeholder="Roll Number"
                onChange={(e) => setRoll(e.target.value)}
                 />
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formGridState" className="mb-3" >
            <Form.Label column sm={2}>Class</Form.Label>
            <Col sm={10}>
            <Form.Select defaultValue="" onChange={(e) => setClass(e.target.value)}>
            <option  value={"one"}>One</option>
            <option  value={"two"}>Two</option>
            <option  value={"three"}>Three</option>
            <option  value={"four"}>Four</option>
            <option  value={"five"}>Five</option>
            </Form.Select>
            </Col>
            </Form.Group>
            
            
        
            <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" className="btn-btn secondary">Submit</Button>
            </Col>
            </Form.Group>
        </Form>
        </Container>
     );
}

export default LoginForm;
