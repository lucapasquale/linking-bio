import React, { FC } from 'react'
import { Snackbar as MUISnackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import { SnackbarAlertContext } from '../../helpers/contexts/snackbar'

export const Snackbar: FC = ({}) => {
  const { isShowing, closeSnackbar, content } = SnackbarAlertContext.useContainer()

  if (!content) {
    return null
  }

  return (
    <MUISnackbar
      open={isShowing}
      onClose={closeSnackbar}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert elevation={6} severity={content.severity} variant="filled">
        {content.text}
      </Alert>
    </MUISnackbar>
  )
}
