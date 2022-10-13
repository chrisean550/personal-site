import axios from "axios";

const FormAPI = async (name, email, message) => {
  try{
    await axios.post(process.env.REACT_APP_FORM_API, {
      name: name,
      email: email,
      message: message
    })
    return true;
  } catch(error) {
    return false;
  }

}

export default FormAPI;

