import { Menu, Input } from "semantic-ui-react";
import Link from "next/link";

export interface MenuConfig {
  name: string,
  url: string
}

const isActive = (url: string, name: string, config: MenuConfig[]) : boolean => {
  return config.find(item => item.url === url).name === name
}

const Sidebar = ({config, url}) => {

  return (
    <Menu vertical>
      <Menu.Item>
        <Input icon='search' placeholder='Search mail...' />
      </Menu.Item>

      {config.map((item) => (
        <Link href={item.url}>
          <Menu.Item name={item.name} active={isActive(url, item.name, config)} />
        </Link>
      ))}
    </Menu>
  )
}

export default Sidebar;