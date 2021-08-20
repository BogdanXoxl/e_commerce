import React from "react";
import { Login, LoginForm } from "react-admin";

const CustomLoginPage = props => (
    <Login loginForm={<LoginForm {...props} />} {...props} />
);

export default CustomLoginPage;