import React, { FC } from 'react'

import { CustomTheme } from '~components/CustomTheme'
import { PageTheme } from '~helpers/graphql/generated'

import { Layout } from './Layout'

type Props = {
  theme: PageTheme
  isSelected: boolean
}

export const PreviewBio: FC<Props> = ({ theme, isSelected }) => {
  return (
    <CustomTheme pageTheme={theme}>
      <Layout theme={theme} isSelected={isSelected} />
    </CustomTheme>
  )
}
