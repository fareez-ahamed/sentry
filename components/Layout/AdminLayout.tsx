import BaseLayout from "./BaseLayout";
import Navbar, { NavbarConfig } from "../Navbar";
import { Header } from "semantic-ui-react";
import Sidebar, { MenuConfig } from "../Sidebar";
import Container from "../Container";

const sidebarConfig : MenuConfig[] = [
  { name: 'dashboard', url: '/admin'  },
  { name: 'users', url: '/admin/users'  }
]

const navbarConfig : NavbarConfig[] = [
  { name: 'logout', url: '/logout', position: "right" }
]

export default function AdminLayout({title = 'Admin', children, url}) {
  return (
    <BaseLayout title={title}>
      <Navbar config={navbarConfig}></Navbar>
      <Container>
        <Sidebar config={sidebarConfig} url={url} />
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