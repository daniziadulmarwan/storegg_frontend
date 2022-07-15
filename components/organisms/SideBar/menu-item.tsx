import Image from "next/image"
import Link from "next/link"

interface MenuItemProps {
  title: string,
  active?: boolean,
  icon: 'overview' | 'transaction' | 'message' | 'card' | 'reward' | 'setting' | 'logout',
  href: string
}

export const MenuItem = (props: Partial<MenuItemProps>) => {
  const { title, active, icon, href = "#" } = props

  return (
    <div className={`item mb-30 ${active ? 'active' : ''}`}>
      <div className="me-3">
        <Image src={`/icon/ic-menu/${icon}.svg`} width={25} height={25} alt="Logo Overview" />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  )
}
