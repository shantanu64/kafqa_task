import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUserCircle } from "react-icons/fa";

function FormDetails() {
  const database = [
    {
      name: "rohit",
      emailId: "rroo@gmail.com",
      password: "1234567890",
      phoneNo: "9876543210",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-10 h-screen">
      <div className="w-1/3 mx-auto flex flex-col items-center my-auto bg-white shadow-2xl">
        <div style={{ backgroundImage: `url("https://wallbeard.com/wp-content/uploads/2019/01/wallpaper-2574943_1920.png")`, backgroundRepeat: "no-repeat", backgroundSize: "100%" }} className="w-full flex h-28 justify-center">
          <span className="text-8xl mt-14 bg-gray-200 rounded-full h-max text-gray-400"><FaUserCircle /></span>
        </div>
        <div className="w-full mt-10">
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phone: "",
              password: "",
            }}
            validationSchema={Yup.object({
              fullName: Yup.string()
                .required("Please enter your Full Name")
                .max(25, "Must be 25 characters or less")
                .matches(/^[A-Za-z ]*$/, "Please enter a valid name"),
              phone: Yup.string()
                .min(10, "Must be 10 characters")
                .max(10, "Must be 10 characters")
                .matches("[0-9]{10}", "Mobile number only contains numbers")
                .required("Please enter your mobile number"),
              email: Yup.string()
                .email("Invalid email format")
                .required("Please enter your email"),
              password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum."),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // console.log(values);
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);

              const userData = database.find(
                (user) =>
                  user.name === values.fullName &&
                  user.emailId === values.email &&
                  user.password === values.password &&
                  user.phoneNo === values.phone
              );
              if (userData) {
                setTimeout(() => {
                  alert("You are a valid user");
                  window.location.href = "home";
                }, 100);
              } else {
                alert("You are an invalid user");
              }
            }}
          >
            <Form>
              <div className="flex flex-col mx-auto items-center gap-2">
                <div className="mx-auto w-3/5 mt-6">
                  <Field
                    name="fullName"
                    type="text"
                    className="border border-solid h-12 text-center border-gray-200 rounded-xl bg-gray-200 w-full outline-none"
                    placeholder="YOUR NAME"
                  />{" "}
                </div>
                <div className="text-red-500 mx-auto w-full text-center text-sm font-semibold">
                  <ErrorMessage name="fullName" />{" "}
                </div>

                <div className="mx-auto w-3/5  mt-2 ">
                  <Field
                    name="email"
                    type="text"
                    className="border border-solid h-12 text-center border-gray-200 rounded-xl bg-gray-200 w-full outline-none"
                    placeholder="EMAIL"
                  />{" "}
                </div>
                <div className="text-red-500 mx-auto w-full text-center text-sm font-semibold">
                  <ErrorMessage name="email" />{" "}
                </div>

                <div className="mx-auto w-3/5  mt-2">
                  <Field
                    name="password"
                    type="password"
                    className="border border-solid h-12 text-center border-gray-200 rounded-xl bg-gray-200 w-full outline-none"
                    placeholder="PASSWORD"
                  />{" "}
                </div>
                <div className="text-red-500 mx-auto w-full text-center text-sm font-semibold">
                  <ErrorMessage name="password" />{" "}
                </div>

                <div className="mx-auto w-3/5  mt-2">
                  <Field
                    name="phone"
                    type="text"
                    className="border border-solid h-12 text-center border-gray-200 rounded-xl bg-gray-200 w-full outline-none"
                    placeholder="PHONE"
                  />{" "}
                </div>
                <div className="text-red-500 mx-auto w-full text-center text-sm font-semibold">
                  <ErrorMessage name="phone" />{" "}
                </div>
              </div>

              {/* submit button and terms and conditions */}
              <div className="pl-28 flex flex-row gap-4">
                <button
                  type="reset"
                  className="px-10 w-2/6 bg-green-400 mb-8 p-2 rounded-full font-bold justify-items-center mt-6"
                >
                  Reset
                </button>

                <button
                  type="submit"
                  className="bg-purple-400  w-2/6 px-10 mb-8 p-2 rounded-full font-bold justify-items-center mt-6"
                >
                  Register
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default FormDetails;