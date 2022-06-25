// import React from 'react';

function NewTask({createTask}) {
    const onSubmit = e => {
      e.preventDefault();
      console.log("Creating tasks....");
      createTask(
        e.target.elements[0].value,
        e.target.elements[1].value
      );
      console.log("Created task!");
    }
  
    return (
      <div style={{display: "ruby-base-container" , margin: "100px", fontSize: "20px"}}>
      <div className="card">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="orange">Create a Task</h2>
          </div>
        </div>
        <div className="row">
          <form id="new-task" className="col-sm-12" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="task-content">Content</label>
              <input id="task-content" type="text" className="form-control"></input>
            </div>
            <div className="form-group">
                <label htmlFor="task-author">Author</label>
                <input id="task-author" type="text" className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      </div>
    );
  }
  
  export default NewTask;