import { Link } from 'react-router-dom';

const StudentList = ({ students }) => {
  return (
    <div className="blog-list">
      {students.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.name }</h2>
            <p>Written by { blog.clss }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default StudentList;