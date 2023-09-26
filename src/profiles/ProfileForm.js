import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormItem from "../auth/FormItem";
import Alert from "../common/Alert";
import MyPhotoAPI from "../api/api";
import LoadingIconHome from "../common/LoadingIconHome";

function ProfileForm({ edit, user }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  async function loadUser() {
    if (!user) {
      console.log("No user value yet");
      setIsLoading(true);
      return;
    }
    try {
      const apiFields = await MyPhotoAPI.getUser(user);
      console.log(apiFields);
      return   {
        username: apiFields.username,
        firstName: apiFields.firstName,
        lastName: apiFields.lastName,
        email: apiFields.email
      };
    }
    catch(err) {
      console.log("loaduser() failed with", err)
      setFormError(err);
    }
  }

  loadUser().then((userData) => {
    setFormData(userData);
    setIsLoading(false)});
  }, [user]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  // I need to fix the logic on this so if an error is thrown
  // I can display to the user that something needs to be fixed
  // I should use similar logic ot my LoginForm.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    console.log(formData);
    try {
      let status = await edit(user, formData);
      console.log(status);
      if (status) {
        navigate("/");
      } 
    } catch (err) {
      console.log("handeSubmit() had some errors", err);
      }
  };
    

  if(isLoading) { 
    return <LoadingIconHome />
  } else {
  return (
    <div className="centered">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-5">
        <h1 className="display-5 fw-bold">Make Profile Changes</h1>
        <div className="card bg-secondary-subtle">
          <div className="card-body">
            <form>
              {Object.keys(formData).map((item) => (
                <FormItem
                  field={`${item}`}
                  value={formData[item]}
                  handleChange={handleChange}
                  key={item}
                />
              ))}
              {formError ? <Alert type="danger" messages={[formError]} /> : null}
              <button onClick={handleSubmit} className="btn btn-primary">
                Submit
              </button>
              <button onClick={() => navigate("/")} className="btn btn-tertiary">
                Return
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );}
}

export default ProfileForm;