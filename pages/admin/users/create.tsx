import { Formik } from 'formik'
import * as React from 'react'
import { Button, Form, Input, Message, Segment } from 'semantic-ui-react'
import Api from '../../../client/api'
import AdminLayout from '../../../components/Layout/AdminLayout'

interface State {
  form: {
    firstName: string,
    lastName: string,
    email: string,
  }
}

interface Props {
  path: string
}

interface FormErrors {
  firstName?: boolean,
  email?: boolean,
  messages?: string[],
  error: boolean
}

class CreateUserPage extends React.Component<Props, State> {

  private formInitial = {
    firstName: '',
    lastName: '',
    email: '',
  }

  private changeHandler: CallableFunction

  constructor(props: { path: string }) {
    super(props)
    this.state = {
      form: {
        firstName: 'Fareez',
        lastName: '',
        email: 'fareez.ahamed@gmail.com',
      },
    }
    this.changeHandler = this.realHandleChange.bind(this)
  }

  public realHandleChange(event: React.SyntheticEvent<KeyboardEvent>) {
    const state = {...this.state}
    console.log(event.target.value)
    state.form.firstName = event.target.value
    state.form.lastName = event.target.value
    console.log(state)
    this.setState(state)
  }

  public validateForm(values): FormErrors {
    const errors: FormErrors = { messages: [], error: false }
    if (!values.firstName) {
      errors.firstName = true
      errors.messages.push('First Name is required')
    }
    if (!values.email) {
      errors.email = true
      errors.messages.push('Email is required')
    }
    errors.error = errors.firstName || errors.email
    return errors.error ? errors : undefined
  }

  public realHandleSubmit(values, {setSubmitting}) {
    console.log('Submitting')
    Api.createUser({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: '123456',
    }).then(result => {
      setSubmitting(false)

    })
  }

  public render() {
    return(
      <AdminLayout title="Create User" url={'/'}>
        <Segment>
        <Formik initialValues={this.formInitial} validate={this.validateForm} onSubmit={this.realHandleSubmit}>
          {({values, errors, touched, handleChange, handleSubmit, isSubmitting}) => (
            <Form success onSubmit={handleSubmit} error={errors.error as any}>
              <Form.Group widths="equal">
                <Form.Field control={Input} name="firstName" onChange={handleChange} value={values.firstName}
                    placeholder="First Name" label="First Name" error={errors.firstName ? true : false}/>
                <Form.Field control={Input} name="lastName" onChange={handleChange} value={values.lastName}
                    placeholder="Last Name" label="Last Name" />
              </Form.Group>
              <Form.Field name="email" control={Input} label="Email" placeholder="Email"
                  onChange={handleChange} value={values.email} error={errors.email ? true : false}/>
              <Message error header="Error!" list={errors.messages as any} />
              <Button primary loading={isSubmitting} type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
        </Segment>
      </AdminLayout>
    )
  }
}

export default CreateUserPage
