import React from "react";
import { usegetInputValue } from "../../hooks/useGetInputValue";
import axios from "../../api";
// import "../login/Login.css";
import { useNavigate } from "react-router-dom";

const initialState = {
  UserName: "",
  password: "",
};

const Login = () => {
  let { formData, handleChange, setFormData } = usegetInputValue(initialState);
  let handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/auth/sign-in", formData)
      .then((res) => {
        localStorage.setItem("x-auth-token", res.data.data.token),
          localStorage.setItem("user-data", JSON.stringify(res.data.data.user)),
          navigate("/products");
      })
      .catch((err) => alert(`Username or Paswword is wrong! \n ${err} `));
    setFormData(initialState);
  };
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="login">
        <h2>Log In</h2>
        <form className="login_form" onSubmit={handleLogin} action="">
          <input
            required
            value={formData.UserName}
            onChange={handleChange}
            name="UserName"
            type="text"
            placeholder="Your Username"
          />
          <input
            required
            value={formData.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Your Password"
          />
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
