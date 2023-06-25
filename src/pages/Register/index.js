import React from "react";
import { RegisterBg } from "../../assets";
import "./register.scss";
import "../../index.css";
import { Gap, Input, Link } from "../../components";
import Button from "../../components/atoms/Button";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="imgBg" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Fullname" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Register" />
        <Gap height={100} />
        <Link title="Kembali ke Halaman Login" />
      </div>
    </div>
  );
};

export default Register;
