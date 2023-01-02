import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';


const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "name must have at list 2 characters").required(),
            email: yup.string().email().required(),
            password: yup.string().min(8, "name must have at list 8 characters").required()
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" })
        },
    });



    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const randerNameError =  formik.touched.name && formik.errors.name && (<span style={{ color: "red" }}>{formik.errors.name}</span>
    );
     const randerEmailError =  formik.touched.email && formik.errors.email && (<span style={{ color: "red" }}>{formik.errors.email}</span>
    );
    const randerPasswordError =  formik.touched.password && formik.errors.password && (<span style={{ color: "red" }}>{formik.errors.password}</span>
    );

    return (
        <div>
            <h2>User Signing</h2>
            <form onSubmit={formik.handleSubmit} >
                <div>
                    <label htmlFor="name"> Name:</label>
                    <input type="text" name="name" id="name"  required
                        value={formik.values.name} onChange={formik.handleChange} />
                    <br />
                    {randerNameError}
                </div>
                <div>
                    <label htmlFor="email"> email:</label>
                    <input type="text" name="email" id="email" required
                     value={ formik.values.email} onChange={formik.handleChange} />
                    <br />
                    {randerEmailError}

                </div>
                <div>
                    <label htmlFor="password"> password:</label>
                    <input type="password" name="password" id="password" required
                     value={formik.values.password} onChange={formik.handleChange} />
                    <br />
                    {randerPasswordError}

                </div>
                <button type='Submit'>Submit</button>
            </form>
        </div>
    )
}

export default SignUp