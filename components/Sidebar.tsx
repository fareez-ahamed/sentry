import { Menu, Input } from "semantic-ui-react";
import Link from "next/link";
import { NextContext } from "next";

const nameOfUrl = (url: string, map) : string => {
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      if(map[key] === url)
        return key
    }
  }
}

const isActive = (url: string, name: string, map) : boolean => nameOfUrl(url, map) === name

const Sidebar = ({map, url}) => {

  let menus : { name: string, url: string }[] = [];

  for(const key in map) {
    if(map.hasOwnProperty(key)) {
      menus.push({
        name: key,
        url: url
      })
    }
  }

  return (
    <Menu vertical>
      <Menu.Item>
        <Input icon='search' placeholder='Search mail...' />
      </Menu.Item>

      {menus.map((item) => (
        <Link href={item.url}>
          <Menu.Item name={item.name} active={isActive(url, item.name, map)} />
        </Link>
      ))}

      
{/* 
      <Link href="/admin/users">
        <Menu.Item name="users" active={isActive(url, "users")} />
      </Link> */}
    </Menu>
  )
}

export default Sidebar;