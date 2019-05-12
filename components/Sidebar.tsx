import Link from 'next/link';
import { Input, Menu } from 'semantic-ui-react';

export interface MenuConfig {
  name: string,
  url: string
}

const isActive = (url: string, name: string, config: MenuConfig[]): boolean => {
  const matchedItem = config.find(item => item.url === url)
  return matchedItem ? matchedItem.name === name : false
}

const Sidebar = ({config, url}) => {

  return (
    <Menu vertical>
      <Menu.Item>
        <Input icon="search" placeholder="Search mail..." />
      </Menu.Item>

      {config.map((item) => (
        <Link key={item.name} href={item.url}>
          <Menu.Item name={item.name} active={isActive(url, item.name, config)} />
        </Link>
      ))}
    </Menu>
  )
}

export default Sidebar;
