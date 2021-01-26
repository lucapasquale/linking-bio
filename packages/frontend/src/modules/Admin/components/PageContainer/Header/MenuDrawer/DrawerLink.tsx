import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

type Props = {
  href: string
  title: string
  icon: React.ReactNode
}

export const DrawerLink: FC<Props> = ({ href, title, icon }) => {
  const router = useRouter()

  const [selected, setSelected] = useState(false)

  useEffect(() => {
    setSelected(router.pathname === href)
  }, [router.pathname])

  return (
    <Link passHref href={href}>
      <ListItem button component="a" selected={selected}>
        <ListItemIcon>{icon}</ListItemIcon>

        <ListItemText primary={title} />
      </ListItem>
    </Link>
  )
}
