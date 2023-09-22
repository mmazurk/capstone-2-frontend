
function SearchPhotoResult({prompt, url}) {

  return (
    <div>

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
                     <a href={url} download="desired-filename.jpg" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary" role="button">Download Image</a>
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
