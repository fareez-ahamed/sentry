import { NextContext } from 'next'
import Link from 'next/link';
import { Button, Icon, Table } from 'semantic-ui-react'
import Api from '../../../client/api';
import AdminLayout from '../../../components/Layout/AdminLayout'

const UserPage = (props) => {

  return (
    <AdminLayout title="Manage Users" url={props.path}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Link href="/admin/users/create">
                <Button icon labelPosition="left" primary size="small">
                  <Icon name="user" /> Add User
                </Button>
              </Link>
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.users.map(user => (
            <Table.Row>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.firstName}</Table.Cell>
              <Table.Cell>{user.lastName}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
          </Table.Row>
        </Table.Footer>
      </Table>
    </AdminLayout>
  )
}

UserPage.getInitialProps = async (context: NextContext) => {
  return Api.getUsers().then(data => ({ users: data, path: context.pathname }))
}

export default UserPage;
