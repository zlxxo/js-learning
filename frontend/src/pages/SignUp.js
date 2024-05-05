import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

function SignUp() {

    const initValues = {
        username: "",
        password: ""
      }
    
    const navigate = useNavigate();

    const Validation = Yup.object().shape({
    username: Yup.string().min(3).max(10).required(),
    password: Yup.string().min(5).max(20).required(),
    })

    const SubmitFunction = (data) => {
        axios.post("http://localhost:3001/users", data).then((response) => {
            console.log(data)
            //navigate("/")
        })
    }
      
  return (
    <div>
      <div class="createPageContent">
        <Formik initialValues={initValues} onSubmit={SubmitFunction} validationSchema={Validation}>
            <Form className='formContainer'>
                <label>User</label>
                <div class="formGroup">
                  <ErrorMessage class="error" name='username' component="span" />
                  <Field autocomplete="off" type="password" class="field" id="createPostUser" name="username" placeholder="Username"></Field>
                </div>
                <label>Password</label>
                <div class="formGroup">
                  <ErrorMessage class="error" name='password' component="span" />
                  <Field autocomplete="off" class="field" id="createPostTitle" name="password" placeholder="Password"></Field>
                </div>
                <button class="createButton" type='submit'>Sign Up</button>
            </Form>
        </Formik>
      </div>
    </div>
  )
}

export default SignUp
