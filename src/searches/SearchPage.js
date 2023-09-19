
import landscape from '../photos/landscape.png'
import nightstreet from '../photos/nightstreet.png'
import programmer from '../photos/programmer.png'

function SearchPage() {
  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="display-5 fw-bold">Search for Photo</h1>
            <p className="lead fw-light">
              Type a prompt in the search box below to create images like the sample
              images below! Make sure and use a descriptive prompt.
            </p>

            <div className="row">
              <div className="col-md-10">
                <input
                  type="text"
                  id="search"
                  className="form-control"
                  placeholder="Enter search term"
                />
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="album py-2">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src={programmer} className='img-fluid'/>
                  <title>Placeholder</title>
                 <div className="card-body">
                  <p className="card-text">
                  Image of a computer programmer working in a busy office with a cup of coffee.
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

            <div className="col">
              <div className="card shadow-sm">
              <img src={landscape} className='img-fluid'/>
                  <title>Placeholder</title>
                <div className="card-body">
                  <p className="card-text">
                  Early morning photography of a landscape shrouded in mist, with diffused light and long shadows.
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

            <div className="col">
              <div className="card shadow-sm">
              <img src={nightstreet} className='img-fluid'/>
                  <title>Placeholder</title>
                <div className="card-body">
                  <p className="card-text">
                  Nighttime photo realistic image of a neon-lit and  downtown city street, using long exposure to capture motion of a few cars.
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
      </div>
      <footer className="text-body-secondary py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">Thank you for using © AI Photo Library!!</p>
        </div>
      </footer>
    </div>
  );
}

export default SearchPage;
