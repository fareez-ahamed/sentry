import * as React from 'react'
import { Button, Form, Header, Input, Message, Segment } from 'semantic-ui-react'
import AdminLayout from '../../../components/Layout/AdminLayout'

class CreateUserPage extends React.Component {

  constructor(props: { path: string }) {
    super(props)
  }

  // public handleSubmit() {

  // }

  public render() {
    return(
      <AdminLayout title="Create User" url={'/'}>
        <Segment>
        <Form loading>
          <Form.Group widths="equal">
            <Form.Field control={Input} label="First Name" placeholder="First Name" />
            <Form.Field control={Input} label="Last Name" placeholder="Last Name" />
          </Form.Group>
          <Form.Field control={Input} label="Email" placeholder="Email" />
          <Message success header="Form Completed" content="You're all signed up for the newsletter" />
          <Button primary>Submit</Button>
        </Form>
        </Segment>
      </AdminLayout>
    )
  }
}

export default CreateUserPage
