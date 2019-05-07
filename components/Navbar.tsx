import { Segment, Menu } from "semantic-ui-react";
import Link from "next/link";
import Container from './Container';

export interface NavbarConfig {
  name: string,
  url: string,
  position: "left" | "right"
}

const Navbar = ({config}) => {
  return(    
    <Menu inverted fixed="top" size="large">
      <Container>
        {config.map(item => (
          <Link href={item.url}>
            <Menu.Item name={item.name} position={item.position} />
          </Link>
        ))}
      </Container>
    </Menu>
  )
}

export default Navbar
