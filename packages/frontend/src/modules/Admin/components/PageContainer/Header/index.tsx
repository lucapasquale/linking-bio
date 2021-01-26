import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { ArrowBack, Menu } from '@material-ui/icons'

import { MenuDrawer } from './MenuDrawer'

type Props = {
  title: string
  userSlug: string | null
  showBack?: boolean
}

export const Header: FC<Props> = ({ title, userSlug, showBack = true }) => {
  const router = useRouter()

  const [open, setOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ['Tab', 'Shift'].includes((event as React.KeyboardEvent).key)) {
      return
    }

    setOpen(open)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {showBack && (
            <IconButton edge="start" onClick={() => router.push('/admin')}>
              <ArrowBack />
            </IconButton>
          )}
          <Typography variant="h6" style={{ flex: 1 }}>
            {title}
          </Typography>

          <IconButton onClick={toggleDrawer(true)}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <MenuDrawer userSlug={userSlug} open={open} onClose={toggleDrawer(false)} />
    </>
  )
}
