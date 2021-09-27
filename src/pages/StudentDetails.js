import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const StudentDetails = () => {
  const { id } = useParams();
  const { data: student, error, isPending } = useFetch('http://localhost:8000/students/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/students/' + student.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { student && (
        <article>
          <h2>Are you sure to delete {student.name}</h2>
          
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default StudentDetails;