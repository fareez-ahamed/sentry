
import BaseLayout from "../components/Layout/BaseLayout";
import { UserNavbar } from "../components/Navbar";

export default function Home (props) {
  return (
    <BaseLayout title="Home">
      <UserNavbar />
    </BaseLayout>
  )
}