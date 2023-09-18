import { useNavigate } from "react-router-dom";

// Add context to this and check if there's a token
// If so, then replace the buttons with a welcome message
// if not then show the page below

function HomePage() {
    {
        const navigate = useNavigate();
        return (
          <div class="p-5 mb-4 bg-body-secondary rounded-3">
            <div class="container py-4">
              <div class="row d-flex align-items-center">
                <div class="col-md-6 fs-4">
                  <h1 class="display-5 fw-bold">My AI Photo Library</h1>
                  <p>Use the power of AI to develop your own custom photos.</p>
                </div>
                <div class="col-md-5 fs-4">
                  <img
                    src="https://images.unsplash.com/photo-1635002964051-740c5f7f14ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                    class="img-fluid"
                  />
                </div>
              </div>

              <div class="row mt-5 d-flex align-items-center">
                <div class="col-md-6">
                  <div class="h-100 p-5 text-bg-dark rounded-3">
                    <h2>Log Into Your Account</h2>
                    <p>
                      Click the button below to log into your account. If you
                      forgot your password please click the other button.
                    </p>
                    <button class="btn btn-outline-light" type="button" onClick={() => navigate("/login")}>
                      Login
                    </button>
                    <button class="btn btn-outline-light" type="button">
                      Reset Password
                    </button>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                    <h2>Sign up for a Free account!</h2>
                    <p>
                      You can sign up for a free account and get your first 20
                      photos free. After that, we offer generous pricing plans
                      that meet your needs.
                    </p>
                    <button class="btn btn-outline-secondary" type="button" onClick={() => navigate("/signup")}>
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          // <div
          //   className="d-flex align-items-center justify-content-center"
          //   style={{height: "75vh"}}>
          //   <div className="text-center">
          //     <h1>AI Thing Wow!</h1>
          //     <p>All of your AI photo generation needs in one convenient place</p>
          //     <button className="btn btn-primary me-1" onClick={() => navigate("/login")}>Login</button>
          //     <button className="btn btn-primary ms-1" onClick={() => navigate("/signup")}>Sign Up</button>
          //   </div>
          // </div>
        );
      }
}

export default HomePage;
