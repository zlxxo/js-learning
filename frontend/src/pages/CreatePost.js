import React from 'react'

import {Formik, Form, Field, ErrorMessage} from 'formik'

function CreatePost() {
  return (
    <div>
      <div class="pageHeader">
        <p class="pageTitle"> Note App</p>
      </div>
      <div class="createPageContent">
        <Formik>
            <Form className='formContainer'>
                <label>User</label>
                <div class="formGroup">
                    <Field autocomplete="off" class="field" id="createPostUser" name="title" placeholder="Username"></Field>
                </div>
                <label>Title</label>
                <div class="formGroup">
                    <Field autocomplete="off" class="field" id="createPostTitle" name="title" placeholder="Title"></Field>
                </div>
                <label>Message</label>
                <div class="formGroup">
                    <Field autocomplete="off" class="field" id="createPostText" name="title" placeholder="Insert text!"></Field>
                </div>

                <button class="createButton" type='submit'>Create</button>
            </Form>
        </Formik>
      </div>
    </div>
  )
}

export default CreatePost
