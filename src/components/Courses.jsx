function Courses() {
  const sampleCourses = [
    { id: 1, code: "CS101", title: "Introduction to Programming", credits: 3 },
    { id: 2, code: "CS201", title: "Data Structures", credits: 4 },
    { id: 3, code: "CS301", title: "Database Systems", credits: 3 },
  ];

  return (
    <div>
      <h2 className="mb-4">Course Management</h2>

      {/* Course Form */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Add / Edit Course</h5>
          <form>
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Course Code</label>
                <input type="text" className="form-control" placeholder="e.g. CS101" />
              </div>
              <div className="col-md-5">
                <label className="form-label">Course Title</label>
                <input type="text" className="form-control" placeholder="e.g. Introduction to Programming" />
              </div>
              <div className="col-md-2">
                <label className="form-label">Credits</label>
                <input type="number" className="form-control" placeholder="3" />
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button type="button" className="btn btn-primary w-100">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Course Table */}
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Title</th>
            <th>Credits</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.code}</td>
              <td>{course.title}</td>
              <td>{course.credits}</td>
              <td>
                <button type="button" className="btn btn-sm btn-warning me-2">Edit</button>
                <button type="button" className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;