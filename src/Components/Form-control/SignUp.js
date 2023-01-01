import React, { useState } from 'react'
import { useFormik } from 'formik';


const SignUp = () => {
    const formik = useFormik ({
        initialValues: {
            name : "",
            email : "",
            password : "",
        },
        onSubmit: (values , {resetForm}) => {
            console.log(values);
            resetForm({ values: ""})
        },
    });

    

    const handleSubmit = (e) => {
        e.preventDefault();
 };

  return (
    <div>
        <h2>User Signing</h2>
        <form onSubmit={formik.handleSubmit} >
            <div>
                <label htmlFor="name"> Name:</label>
                <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} />
            </div>
            <div>
                <label htmlFor="email"> email:</label>
                <input type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
            </div>
            <div>
                <label htmlFor="password"> password:</label>
                <input type="password" name="password" id="password"  value={formik.values.password} onChange={formik.handleChange} />
            </div>
            <button type='Submit'>Submit</button>
        </form>
    </div>
  )
}

export default SignUp