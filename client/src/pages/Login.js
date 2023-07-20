import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../server";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(`${server}/user/login`, values);
      window.location.reload();
      dispatch(hideLoading());

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfull");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());

      console.log(error);
      message.error("Something went wrong");
    }
  };
  return (
    <div className="form-container">
      <Form
        layout="veritcal"
        onFinish={onfinishHandler}
        className="register-form"
      >
        <h3 className="text-center"> Login Form</h3>
        <div>Email:</div>
        <Form.Item label="" name="email">
          <Input type="email" required />
        </Form.Item>
        <div>Password:</div>
        <Form.Item label="" name="password">
          <Input type="password" required />
        </Form.Item>
        <Link to="/register" className="m-3">
          Not registered? register here
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;