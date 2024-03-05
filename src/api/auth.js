import axios from "axios";

const registerRequest = (user) => {
  axios.post("http://localhost:5005/auth/register", user);
};
