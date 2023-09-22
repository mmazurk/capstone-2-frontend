
import './userLibrary.css'
import UserPrompt from './UserPrompt';

function UserLibrary({promptList}) {

    // converting the date to something we can read
    const formattedPromptList = promptList.map((item) => {
        return { ...item, date: new Date(item.date).toLocaleString()}
      })

  return (
    <div className="mark-1">
      <div className="py-3 text-center container-fluid">
        <div className="row">
          <div className="col mx-auto">
            <h1 className="display-5 fw-bold">User Page</h1>
          </div>
        </div>
      </div>

      <div>
        <div className="container py-0 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1521806463-65fbb1ab7ff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ zIndex: "1" }}
                    />
                    <button
                      type="button"
                      className="mt-4 btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: "1" }}
                    >
                      Edit profile
                    </button>
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <h5>Sadman22</h5>
                    <p>Mark Mazurkiewicz</p>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <p className="mb-1 h5">32</p>
                      <p className="small text-muted mb-0">Photos Generated</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-1 h5">4</p>
                      <p className="small text-muted mb-0">In Gallery</p>
                    </div>
                    <div>
                      <p className="mb-1 h5">478</p>
                      <p className="small text-muted mb-0">Following</p>
                    </div>
                  </div>
                </div>



                <div className="card-body p-4 text-black">
                  <div className="mb-2">
                    <p className="fs-4 fw-bold mb-1">Recent Prompts</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <ul className="list-group">
                        
                        {formattedPromptList.map(item => 
                            <UserPrompt date={item.date} promptText={item.promptText} key={item.promptID} />)}

                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span>
                            <strong>[[ 2023-09-15: ]]</strong>&nbsp;This would
                            be a sample prompt. This would be a sample prompt.
                            This would be a sample prompt.
                          </span>
                          <div>
                            <button className="btn btn-outline-primary btn-sm mr-2">
                              Run Again
                            </button>
                            <button className="btn btn-outline-danger btn-sm">
                              Delete
                            </button>
                          </div>
                        </li>
                      
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fs-4 fw-bold mb-0">Tip of the Day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLibrary;
