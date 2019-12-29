import Link from 'next/link';
import { Input, Menu } from 'semantic-ui-react';

export interface MenuConfig {
  name: string,
  url: string
}

interface Props {
  config: MenuConfig[],
  url: string
}

const Sidebar: React.FC<Props> = ({config, url}) => {
  return (
    <Menu vertical>
      <Menu.Item>
        <Input icon="search" placeholder="Search mail..." />
      </Menu.Item>

      {config.map((item: MenuConfig) => (
        <Link key={item.name} href={item.url}>
          <Menu.Item name={item.name} active={isActive(url, item.name, config)} />
        </Link>
      ))}
    </Menu>
  )
}

const isActive = (url: string, name: string, config: MenuConfig[]): boolean => {
  const matchedItem = config.find(item => item.url === url)
  return matchedItem ? matchedItem.name === name : false
}

export default Sidebar;
