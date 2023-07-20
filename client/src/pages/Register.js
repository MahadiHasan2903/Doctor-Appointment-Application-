import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { server } from "../server";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(`${server}/user/register`, values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Registration Successfull");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="form-container">
        <Form
          layout="veritcal"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center"> Registration Form</h3>
          <div>Name:</div>
          <Form.Item label="" name="name">
            <Input type="text" required />
          </Form.Item>
          <div>Email:</div>
          <Form.Item label="" name="email">
            <Input type="email" required />
          </Form.Item>
          <div>Password:</div>
          <Form.Item label="" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-3">
            Already registered? login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
