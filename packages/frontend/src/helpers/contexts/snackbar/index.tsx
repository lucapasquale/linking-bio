import { useState } from 'react'
import { createContainer } from 'unstated-next'
import { AlertProps } from '@material-ui/lab/Alert'

type ModalInfo = {
  text: string
  severity: AlertProps['severity']
}

export const SnackbarAlertContext = createContainer(useSnackbarAlert)

function useSnackbarAlert() {
  const [isShowing, setIsShowing] = useState(false)
  const [content, setContent] = useState<ModalInfo | null>(null)

  const showSnackbar = (
    text: string,
    options: Omit<ModalInfo, 'text'> = { severity: 'success' }
  ) => {
    if (isShowing) {
      closeSnackbar()
    }

    setContent({ text, ...options })
    setIsShowing(true)
  }

  const closeSnackbar = () => {
    setContent(null)
    setIsShowing(false)
  }

  return {
    showSnackbar,
    closeSnackbar,
    isShowing,
    content,
  }
}
