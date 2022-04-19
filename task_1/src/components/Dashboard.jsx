import React from "react";
import { Formik, Form, useField, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Dashboard() {
    return (
        <>
            <div className="text-center text-red-500 font-black xl:p-60 h-screen w-full">
                    <h1 className="text-7xl">Hello World!</h1>
            </div>
        </>
    );
};

export default Dashboard;
