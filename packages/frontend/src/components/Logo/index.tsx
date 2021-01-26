import React, { FC } from 'react'
import { makeStyles, Typography, TypographyProps } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  logo: {
    fontWeight: (props: { isH1: boolean }) => (props.isH1 ? 900 : 'bold'),
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  accent: { color: theme.palette.secondary.main },
}))

type Props = {
  singleLine?: boolean
  variant?: TypographyProps['variant']
}

export const Logo: FC<Props> = ({ singleLine = false, variant = 'h1' }) => {
  const classes = useStyles({ isH1: variant === 'h1' })

  return (
    <Typography variant={variant} className={classes.logo}>
      LINKIN<span className={classes.accent}>G</span>
      {singleLine ? null : <br />}
      BIO.
    </Typography>
  )
}
