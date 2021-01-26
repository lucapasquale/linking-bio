import React, { FC, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import { PageTheme } from '~helpers/graphql/generated'
import { Button } from '~components/Button'

import { useUpdatePageMutation } from '../graphql/update-page'
import { PreviewBio } from './PreviewBio'

const useStyles = makeStyles((theme) => ({
  button: { alignSelf: 'flex-end', marginTop: theme.spacing(2) },
}))

type Props = {
  initialValue: PageTheme
  onSuccess: () => Promise<void>
}

export const ThemeSelection: FC<Props> = ({ initialValue, onSuccess }) => {
  const classes = useStyles()

  const [theme, setTheme] = useState<PageTheme>(initialValue)
  const [updatePage, { loading }] = useUpdatePageMutation()

  const renderOption = (_theme: PageTheme) => (
    <Grid item xs={6} onClick={() => setTheme(_theme)}>
      <PreviewBio isSelected={theme === _theme} theme={_theme} />
    </Grid>
  )

  const onButtonClick = async () => {
    await updatePage({ variables: { input: { theme } } })
    await onSuccess()
  }

  return (
    <>
      <Grid container spacing={2}>
        {renderOption(PageTheme.Dark)}
        {renderOption(PageTheme.Light)}
        {renderOption(PageTheme.Red)}
        {renderOption(PageTheme.Pink)}
        {renderOption(PageTheme.Forest)}
        {renderOption(PageTheme.Tan)}
      </Grid>

      <Button
        variant="contained"
        color="secondary"
        loading={loading}
        onClick={onButtonClick}
        className={classes.button}
      >
        Save
      </Button>
    </>
  )
}
