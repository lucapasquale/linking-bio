import React, { FC } from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

import { PageTheme } from '~helpers/graphql/generated'

const useStyles = makeStyles((theme) => ({
  selectedBorder: (props: { isSelected: boolean }) => ({
    padding: '2px',
    borderRadius: theme.spacing(1),
    backgroundColor: props.isSelected ? theme.palette.secondary.main : 'transparent',
  }),
  content: {
    cursor: 'pointer',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: '50%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.getContrastText(theme.palette.background.default),
  },
  link: {
    width: '100%',
    height: theme.spacing(4),
    borderRadius: 4,
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  themeName: {
    marginTop: theme.spacing(2),
    textTransform: 'capitalize',
    color: theme.palette.getContrastText(theme.palette.background.default),
  },
}))

type Props = {
  theme: PageTheme
  isSelected: boolean
}

export const Layout: FC<Props> = ({ theme, isSelected }) => {
  const classes = useStyles({ isSelected })

  return (
    <Box className={classes.selectedBorder}>
      <Box display="flex" flexDirection="column" alignItems="center" className={classes.content}>
        <div className={classes.avatar} />

        <div className={classes.link} />
        <div className={classes.link} />
        <div className={classes.link} />

        <Typography variant="h6" className={classes.themeName}>
          {theme.toLowerCase()}
        </Typography>
      </Box>
    </Box>
  )
}
