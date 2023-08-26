import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { api } from "../../API/api";
import { Logo } from "../../assets/images";
import "./Login.css";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values) => {
    const data = await api.login(values);
    console.log(data.data);
    if (data.data.status === 200) {
      localStorage.clear();
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("admin", data.data.data.username);
      window.location.replace("/");
    }
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(2, "Username must be longer then 2")
      .required("Required!"),
    password: Yup.string()
      .min(5, "Password must be longer then 3")
      .required("Required!"),
  });

  return (
    <div className="container w-25 mx-auto">
      <span className="d-block text-center mt-5">
        <Logo />
      </span>
      <div className="my-5 p-5 shadow login-form">
        <h1 className="text-center logo-title">Kirish</h1>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="position-relative">
            <div className="mb-4 loginIcon">
              <Field
                className="form-control ps-4"
                type="text"
                name="username"
                id="username"
                placeholder="Login..."
              />
              <ErrorMessage
                component={"div"}
                className="text-danger position-absolute"
                name="username"
              />
            </div>
            <div className="mb-4 passIcon">
              <Field
                className="form-control ps-4"
                type="password"
                name="password"
                id="password"
                placeholder="Parol..."
              />
              <ErrorMessage
                component={"div"}
                className="text-danger position-absolute"
                name="password"
              />
            </div>
            <button className="btn btn-dark form-control" type="submit">
              Kirish
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
