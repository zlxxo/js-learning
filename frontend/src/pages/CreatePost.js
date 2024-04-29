import React from 'react'
import axios from 'axios'


import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

function CreatePost() {

  const initValues = {
    user: "",
    title: "",
    text: "",
  }

  const Validation = Yup.object().shape({
    user: Yup.string().min(3).max(10).required(),
    title: Yup.string().required(),
    text: Yup.string().max(200).required(),
  })

  const SubmitFunction = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("Successfull post!")
    })
  }

  return (
    <div>
      <div class="pageHeader">
        <p class="pageTitle"> Note App</p>
      </div>
      <div class="createPageContent">
        <Formik initialValues={initValues} onSubmit={SubmitFunction} validationSchema={Validation}>
            <Form className='formContainer'>
                <label>User</label>
                <div class="formGroup">
                  <ErrorMessage class="error" name='user' component="span" />
                  <Field autocomplete="off" class="field" id="createPostUser" name="user" placeholder="Username"></Field>
                </div>
                <label>Title</label>
                <div class="formGroup">
                  <ErrorMessage class="error" name='title' component="span" />
                  <Field autocomplete="off" class="field" id="createPostTitle" name="title" placeholder="Title"></Field>
                </div>
                <label>Message</label>
                <div class="formGroup">
                  <ErrorMessage class="error" name='text' component="span" />
                  <Field as="textarea" autocomplete="off" class="field" id="createPostText" name="text" placeholder="Insert text!"></Field>
                </div>

                <button class="createButton" type='submit'>Create</button>
            </Form>
        </Formik>
      </div>
    </div>
  )
}

export default CreatePost
