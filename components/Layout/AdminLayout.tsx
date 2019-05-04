import BaseLayout from "./BaseLayout";
import { AdminNavbar } from "../Navbar";
import { Segment, Header } from "semantic-ui-react";
import Sidebar from "../Sidebar";
import Container from "../Container";

const sidebarMap = {
  'dashboard' : '/admin',
  'users' : '/admin/users'
}

export default function AdminLayout({title = 'Admin', children, url}) {
  return (
    <BaseLayout title={title}>
      <AdminNavbar />
      <Container>
        <Sidebar map={sidebarMap} url={url} />
        <div style={{ flex: 1, marginLeft: 30}}>
          <Header>{title}</Header>
          <div style={{ marginTop: 20 }}>
            {children}
          </div>
        </div>
      </Container>
    </BaseLayout>
  )
}