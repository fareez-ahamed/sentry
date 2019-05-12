import fetch from 'isomorphic-unfetch';
import { NextContext } from 'next';
import { Table } from 'semantic-ui-react';
import AdminLayout from '../../components/Layout/AdminLayout';

const UserPage = (props) => {
  console.log('PROPS')
  console.log(props.path)
  return (
    <AdminLayout title="Manage Users" url={props.path}>
      <Table>
        <Table.Header>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
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
      </Table>
    </AdminLayout>
  )
}

UserPage.getInitialProps = async (context: NextContext) => {
  return fetch('http://localhost:3000/api/users').then(res => res.json())
              .then(data => ({ users: data, path: context.pathname }))
}

export default UserPage;
