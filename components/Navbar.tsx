import { Segment, Menu } from "semantic-ui-react";
import Link from "next/link";

export const AdminNavbar = (props) => {
  return (
    <Menu inverted fixed="top" size="large">
      <Menu.Item name="home"/>
      <Menu.Item name="settings"/>
      <Link href="/logout">
        <Menu.Item as="a" name="logout" position="right" />
      </Link>
    </Menu>
  )
}

export const UserNavbar = (props) => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item name="home"/>
        <Link href="/logout">
          <Menu.Item as="a" name="logout" position="right" />
        </Link>
      </Menu>
    </Segment>
  )
}