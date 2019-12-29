import { Header } from 'semantic-ui-react';
import Container from '../Container';
import Navbar, { NavbarConfig } from '../Navbar';
import Sidebar, { MenuConfig } from '../Sidebar';
import SlidingContainer from '../SlidingContainer';
import BaseLayout from './BaseLayout';

const sidebarConfig: MenuConfig[] = [
  { name: 'dashboard', url: '/admin'  },
  { name: 'users', url: '/admin/users'  },
]

const navbarConfig: NavbarConfig[] = [
  { name: 'logout', url: '/logout', position: 'right' },
]

interface Props {
  title?: string,
  url: string
}

const AdminLayout: React.FC<Props> = ({title = 'Admin', children, url}) => {
  return (
    <BaseLayout title={title}>
      <Navbar config={navbarConfig}></Navbar>
      <Container marginTop={80}>
        <Sidebar config={sidebarConfig} url={url} />
        <div style={{ flex: 1, marginLeft: 30}}>
          <Header>{title}</Header>
          <div style={{ marginTop: 20 }}>
            {children}
          </div>
        </div>
      </Container>
      <SlidingContainer />
    </BaseLayout>
  )
}

export default AdminLayout
