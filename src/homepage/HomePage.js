import { useNavigate } from "react-router-dom";

// Add context to this and check if there's a token
// If so, then replace the buttons with a welcome message
// if not then show the page below

function HomePage() {
    {
        const navigate = useNavigate();
        return (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{height: "75vh"}}>
            <div className="text-center">
              <h1>AI Thing Wow!</h1>
              <p>All of your AI photo generation needs in one convenient place</p>
              <button className="btn btn-primary me-1" onClick={() => navigate("/login")}>Login</button>
              <button className="btn btn-primary ms-1" onClick={() => navigate("/signup")}>Sign Up</button>
            </div>
          </div>
        );
      }
}

export default HomePage;
