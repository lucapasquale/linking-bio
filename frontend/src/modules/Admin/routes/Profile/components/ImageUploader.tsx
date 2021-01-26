import React, { FC, useState, useEffect, useRef } from 'react'
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { AddAPhoto } from '@material-ui/icons'

import { useUploadImage } from '../graphql/upload-image'

const useStyles = makeStyles((theme) => ({
  wrapper: { alignSelf: 'center' },
  content: { display: 'flex', alignItems: 'center' },
  image: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundSize: 'cover',
    backgroundImage: (props: { imageSrc?: string | null }) => `url(${props.imageSrc})`,
  },
  overlay: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  rightContainer: { display: 'flex', flexDirection: 'column', marginLeft: theme.spacing(3) },
  label: { marginBottom: theme.spacing(1) },
}))

type Props = {
  label: string
  initialValue?: string | null
  onSuccess: (url: string | null) => any
}

export const ImageUploader: FC<Props> = ({ label, onSuccess, initialValue }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [uploadImage, { loading, data, error }] = useUploadImage()

  const [errorMessage, setErrorMessage] = useState('')
  const [imageSrc, setImageSrc] = useState(initialValue)

  const classes = useStyles({ imageSrc })

  useEffect(() => {
    if (!data) {
      return
    }

    onSuccess(data.uploadImage.slug)
    setImageSrc(data.uploadImage.slug)
  }, [data])

  useEffect(() => {
    if (!error) {
      return
    }

    setErrorMessage(error.message.replace('GraphQL error: ', ''))
  }, [error])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('')

    if (!e.target.files) {
      return
    }

    const file = e.target.files[0]
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('File too big! Select a file with 5MB or less')
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = async (upload: any) => {
      if (!upload.target) {
        return
      }

      const image = upload.target.result
      uploadImage({ variables: { image } })
    }
  }

  const onDeleteClick = () => {
    setImageSrc(null)
    onSuccess(null)
  }

  return (
    <FormControl error={!!errorMessage} className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.image} onClick={() => inputRef.current && inputRef.current.click()}>
          <div className={classes.overlay}>
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              style={{ display: 'none' }}
              onChange={onInputChange}
            />

            {loading ? <CircularProgress color="inherit" /> : <AddAPhoto />}
          </div>
        </div>

        <div className={classes.rightContainer}>
          <Typography
            variant="body1"
            className={classes.label}
            color={!!errorMessage ? 'error' : 'inherit'}
          >
            {label}
          </Typography>

          <Button variant="outlined" onClick={onDeleteClick}>
            Remove
          </Button>
        </div>
      </div>

      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  )
}
