import AdminLayout from "../../components/Layout/AdminLayout";
import { Table, Header } from "semantic-ui-react";
import { NextContext } from "next";
import { getRepository } from "typeorm";
import { User } from "../../db/entity/User";

const UserPage = (props) => {
  console.log("PROPS")
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
          <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>1</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </AdminLayout>
  )
}

UserPage.getInitialProps = async (context: NextContext) => {
  return {
    path: context.pathname
  }
}

export default UserPage;