interface ButtonTabProps {
  title: string,
  active?: boolean
}

export const ButtonTab = (props: Partial<ButtonTabProps>) => {
  const { title, active } = props
  return (
    <a data-filter="*" href="#" className={`btn btn-status rounded-pill text-sm ${active ? 'btn-active' : ''} me-3`}>
      {title}
    </a>
  )
}
