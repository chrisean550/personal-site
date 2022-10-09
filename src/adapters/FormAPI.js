import axios from "axios";

const FormAPI = (name, email, message) => {
  axios.post('http://localhost:7071/api/emailer', {
    name: name,
    email: email,
    message: message
  })
  .then((res)=>{console.log("hi")})
  .catch((error)=>{console.log("bye")})
}

export default FormAPI;

