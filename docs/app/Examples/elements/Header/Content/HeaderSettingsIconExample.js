import React from 'react'
import { Header, Icon } from 'stardust'

const HeaderIconExample = () => (
  <Header as='h2'>
    <Icon name='settings' />
    <Header.Content>
      Account Settings
      <Header.Subheader>
        Manage your preferences
      </Header.Subheader>
    </Header.Content>
  </Header>
)

export default HeaderIconExample
