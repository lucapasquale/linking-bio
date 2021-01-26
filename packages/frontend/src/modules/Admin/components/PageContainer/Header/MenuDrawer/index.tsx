import React, { FC, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import { Brush, ExitToApp, FileCopy, Pageview, Person, ViewList, VpnKey } from '@material-ui/icons'

import { config } from '~src/config'
import { DrawerLink } from './DrawerLink'

const useStyles = makeStyles({
  list: { width: 250 },
  footer: { position: 'fixed', bottom: 0, width: 250 },
})

type Props = {
  userSlug: string | null
  open: boolean
  onClose: (event: React.KeyboardEvent | React.MouseEvent) => void
}

export const MenuDrawer: FC<Props> = ({ userSlug, open, onClose }) => {
  const classes = useStyles()

  const [shareText, setShareText] = useState('Copy bio link')
  const onCopyClick = () => {
    if (shareText === 'Link copied!') {
      return
    }

    setTimeout(() => {
      setShareText('Link copied!')

      setTimeout(() => setShareText('Copy bio link'), 2000)
    }, 50)
  }

  return (
    <Drawer open={open} onClose={onClose}>
      <div className={classes.list}>
        <List component="nav">
          <DrawerLink title="Links" href="/admin" icon={<ViewList />} />
          <DrawerLink title="Edit Profile" href="/admin/profile" icon={<Person />} />
          <DrawerLink title="Customize Theme" href="/admin/theme" icon={<Brush />} />
          <DrawerLink title="Change Password" href="/admin/password" icon={<VpnKey />} />

          <Divider />

          {userSlug && (
            <>
              <CopyToClipboard onCopy={onCopyClick} text={`${config.CLIENT_URL}/${userSlug}`}>
                <ListItem button>
                  <ListItemIcon>
                    <FileCopy />
                  </ListItemIcon>

                  <ListItemText primary={shareText} />
                </ListItem>
              </CopyToClipboard>

              <ListItem button component="a" target="_blank" href={`/${userSlug}`}>
                <ListItemIcon>
                  <Pageview />
                </ListItemIcon>

                <ListItemText primary="Check my bio" />
              </ListItem>
            </>
          )}

          <div className={classes.footer}>
            <Divider />

            <DrawerLink title="Logout" href="/auth/logout" icon={<ExitToApp />} />
          </div>
        </List>
      </div>
    </Drawer>
  )
}
