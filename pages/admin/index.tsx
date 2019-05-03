import BaseLayout from "../../components/BaseLayout";
import { Segment, Menu } from "semantic-ui-react";
import Link from "next/link";

export default function Admin(props) {
    return (
        <BaseLayout title="Home">
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item name="home"/>
          <Menu.Item name="settings"/>
          <Link href="/logout">
            <Menu.Item as="a" name="logout" position="right" />
          </Link>
        </Menu>
      </Segment>
    </BaseLayout>
    )
}