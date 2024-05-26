import React from 'react'
import { Menu,Container,Button } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Menu inverted fixed='top'>
        <Container>
            <Menu.Item>
                <img src="" alt="logo" />
                Reactivities
            </Menu.Item>
            <Menu.Item name='Activities'/>
            <Menu.Item>
                <Button positive content='Create Activity' />
            </Menu.Item>
        </Container>
    </Menu>
  )
}

export default NavBar