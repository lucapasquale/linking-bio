import * as R from 'ramda'
import React, { FC } from 'react'
import { createMuiTheme, ThemeOptions, ThemeProvider } from '@material-ui/core'

import { theme } from '~helpers/theme'
import { PageTheme } from '~helpers/graphql/generated'

type Props = {
  pageTheme?: PageTheme
}

export const CustomTheme: FC<Props> = ({ children, pageTheme = PageTheme.Dark }) => {
  const customTheme = R.mergeDeepRight(theme, {
    palette: getPageThemePalette(pageTheme),
  })

  return <ThemeProvider theme={createMuiTheme(customTheme)}>{children}</ThemeProvider>
}

function getPageThemePalette(pageTheme: PageTheme): ThemeOptions['palette'] {
  switch (pageTheme) {
    case PageTheme.Light:
      return {
        type: 'light',
        primary: { main: '#405DD0' },
        background: { default: '#ECECEC' },
      }

    case PageTheme.Red:
      return {
        type: 'dark',
        primary: { main: '#CA2F2F' },
        background: { default: '#202020' },
      }

    case PageTheme.Pink:
      return {
        type: 'light',
        primary: { main: '#E6D7FF' },
        secondary: { main: '#246C68' },
        background: { default: '#ECECEC' },
      }

    case PageTheme.Tan:
      return {
        type: 'light',
        primary: { main: '#266150' },
        background: { default: '#e8cebf' },
      }

    case PageTheme.Forest:
      return {
        type: 'dark',
        primary: { main: '#38603e' },
        background: { default: '#3c413d' },
      }

    default:
      return {}
  }
}
