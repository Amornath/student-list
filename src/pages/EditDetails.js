import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../useFetch";
import {Form, Col, Row, Button, Container} from "react-bootstrap";

const EditDetails = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [clss, setClass] = useState('');

  const { data: student} = useFetch('http://localhost:8000/students/' + id);
  const history = useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    const student = { name, roll, clss,id };

    fetch('http://localhost:8000/students/'+ student.id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }).then(() => {
      
      history.push('/');

    })
  }

  return (
    <div className="blog-details">
        {student &&
      <Container className="mb-5">
            <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
                Name
            </Form.Label>
            <Col sm={10}>
                <Form.Control
                 type="text"
                 placeholder={student.name}
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
                placeholder={student.roll}
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
                <Button type="submit" className="btn-btn secondary">Edit</Button>
            </Col>
            </Form.Group>
        </Form>
        </Container>}
    </div>
  );
}
 
export default EditDetails;