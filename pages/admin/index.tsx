import { NextContext } from 'next';
import AdminLayout from '../../components/Layout/AdminLayout';

const Admin = (props) => {
  return (
    <AdminLayout url={props.path}>
      <h1>Welcome</h1>
    </AdminLayout>
  )
}

Admin.getInitialProps = async (context: NextContext) => {
  return {
    path: context.pathname,
  }
}

export default Admin
