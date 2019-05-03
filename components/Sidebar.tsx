import { Menu, Segment, Input } from "semantic-ui-react";

export default function AdminSidebar(props) {
  return (
    <Menu vertical>
      <Menu.Item name="users" />
      <Menu.Item name="guests" />
      <Menu.Item name="hosts" />
      <Menu.Item>
        <Input icon='search' placeholder='Search mail...' />
      </Menu.Item>
    </Menu>
  )
}