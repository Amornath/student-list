
import { Table, Button,Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import useFetch from "../useFetch";

const Home = () => {
  const { error, isPending, data: students } = useFetch('http://localhost:8000/students')
 

 

  return (
    <div className="home">
      <h2>All Students</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
     
      {students &&
      <Container>
      <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Class</th>
                          <th>Roll</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((item, i) => (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.clss}</td>
                            <td>{item.roll}</td>
                            <td>
                              <Link to={`/students/${item.id}`}>
                              <Button variant="danger" >Delete</Button> 
                              </Link>

                              <Link to={`/${item.id}/edit`}>
                              <Button variant="info">Edit</Button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
        </Table>
        </Container> }
    </div>
  );
}
 
export default Home;