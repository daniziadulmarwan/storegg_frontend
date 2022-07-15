import { Footer } from './footer'
import { MenuItem } from './menu-item'
import { Profile } from './profile'

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title='Overview' icon='overview' active={activeMenu === 'overview'} href="/member" />
          <MenuItem title='Transactions' icon='transaction' active={activeMenu === 'transactions'} href='/member/transactions' />
          <MenuItem title='Messages' icon='message' href='/member' />
          <MenuItem title='Card' icon='card' href='/member' />
          <MenuItem title='Rewards' icon='reward' href='/member' />
          <MenuItem title='Settings' icon='setting' active={activeMenu === 'settings'} href="/member/edit-profile" />
          <MenuItem title='Log Out' icon='logout' href='/sign-in' />
        </div>
        <Footer />
      </div>
    </section>
  )
}
