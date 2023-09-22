import Alert from "../common/Alert";
import { useState } from "react";
import OpenAiAPI from "../api/externalApi";

function SearchForm({prompt, setPhotoURLStatus, setLoading}) {

    const initialState = "";
  
    const [formData, setFormData] = useState(initialState);
    const [formError, setFormError] = useState(null);
  
    const handleChange = (e) => {
      setFormData(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("You submitted", formData);
      setLoading(true);
      
    try {
        // const photoURL = await OpenAiAPI.getPhoto(formData);
        const testUrl="https://oaidalleapiprodscus.blob.core.windows.net/private/org-F06Z84gXSG7zUYqTfm99vbjb/user-I85LUcp6z1K6vw7X7yMPwiuu/img-2uPoEcEYROdWHA8KbiGyS10h.png?st=2023-09-22T01%3A54%3A45Z&se=2023-09-22T03%3A54%3A45Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-21T22%3A09%3A29Z&ske=2023-09-22T22%3A09%3A29Z&sks=b&skv=2021-08-06&sig=%2Bek8VWgWruAvWRScKXunKCnQ3VygKB1b5eJwQbeGwW4%3D"
        setPhotoURLStatus(testUrl, formData);
        setLoading(false);
    } catch(err) {
        setFormError(err)
        setLoading(false);
    }

      setFormData(initialState);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
        <section className="pt-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="display-5 fw-bold">Search for Photo</h1>
              <p className="lead fw-light">
                {prompt}
              </p>
  
              <div className="row">
                <div className="col-md-10">
                  <input
                    type="text"
                    id="search"
                    className="form-control"
                    placeholder="Enter search term"
                    value={formData}
                    onChange={handleChange}
        
                  />
                </div>
                <div className="col-md-2">
                  <button type="submit" className="btn btn-primary w-100">Search</button>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-md-12">
                {formError ? <Alert type="danger" messages={[formError]} /> : null}
                </div>
              </div>
            </div>
          </div>
        </section>
        </form>
    </div>
    )
}

export default SearchForm;