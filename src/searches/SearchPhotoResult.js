import { useParams } from "react-router-dom";

function SearchPhotoResult({prompt, url}) {

  return (
    <div>

      {/* <section class="pt-4 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="display-5 fw-bold">Photo Results</h1>
            <p class="lead fw-light">
              This is the photo you generated! The text you used to generate the
              photo will be below it.
            </p>

            <div class="row">
              <div class="col-md-9">
                <input
                  type="text"
                  id="search"
                  class="form-control"
                  placeholder="Enter search term"
                />
              </div>
              <div class="col-md-3">
                <button class="btn btn-primary w-100">Try Again</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="album py-0">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <div className="card shadow-sm">
                <div className="row">
                  <img
                    src={url}
                    // src="https://images.unsplash.com/photo-1589251204996-3367cc27f084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    {prompt}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">more text</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    
    </div>
  );
}

export default SearchPhotoResult;
