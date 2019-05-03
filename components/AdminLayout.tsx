import BaseLayout from "./BaseLayout";
import { AdminNavbar } from "./Navbar";
import { Segment } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import Container from "./Container";

export default function AdminLayout({title = 'Admin', children}) {
  return (
    <BaseLayout title={title}>
      <AdminNavbar />
      <Container>
        <Sidebar />
        <Segment style={{marginTop:0, marginLeft:20, width:'100%'}}>{children}</Segment>
      </Container>
    </BaseLayout>
  )
}