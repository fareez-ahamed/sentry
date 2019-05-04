import { Segment, Menu } from "semantic-ui-react";
import Link from "next/link";

export interface NavbarConfig {
  name: string,
  url: string,
  position: "left" | "right"
}

const Navbar = ({config}) => {
  return(
    <Menu inverted fixed="top" size="large">
      {config.map(item => (
        <Link href={item.url}>
          <Menu.Item name={item.name} position={item.position} />
        </Link>
      ))}
    </Menu>
  )
}

export default Navbar
