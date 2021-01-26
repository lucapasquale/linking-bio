import * as R from 'ramda'
import React, { FC } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { FormControl, makeStyles, Typography } from '@material-ui/core'
import { DragIndicator } from '@material-ui/icons'

import { InputFormItem } from '~components/InputFormItem'
import { getSocialIcon } from '~components/UserHeader/SocialLinks'
import { SocialLinkKind, UpdateProfileSocialsInput } from '~helpers/graphql/generated'

const useStyles = makeStyles((theme) => ({
  wrapper: { marginTop: theme.spacing(4) },
  title: { marginBottom: theme.spacing(1) },
  socialItem: { display: 'flex', alignItems: 'center', marginBottom: theme.spacing(2) },
  icon: {
    fontSize: 32,
    margin: theme.spacing(0, 2),
    color: theme.palette.getContrastText(theme.palette.background.default),
  },
  input: { flexGrow: 1 },
}))

type SortableSocials = UpdateProfileSocialsInput & {
  id: SocialLinkKind
}

type Props = {
  social: UpdateProfileSocialsInput[]
  setSocial: (newValue: UpdateProfileSocialsInput[]) => void
}

export const SocialForm: FC<Props> = ({ social, setSocial }) => {
  const classes = useStyles()

  const list: SortableSocials[] = social.map((item) => ({ ...item, id: item.kind }))
  const setList = (newList: SortableSocials[]) => {
    setSocial(newList.map(R.pick(['kind', 'value'])))
  }

  const onInputChange = (kind: SocialLinkKind, value: string) => {
    const updatedSocial = social.map((item) => {
      if (item.kind !== kind) {
        return item
      }

      return { ...item, value }
    })

    setSocial(updatedSocial)
  }

  return (
    <FormControl className={classes.wrapper}>
      <Typography className={classes.title}>Socials</Typography>

      <ReactSortable list={list} setList={setList} handle=".dragable">
        {list.map((listItem) => (
          <div key={listItem.id} className={classes.socialItem}>
            <div className="dragable">
              <DragIndicator />
            </div>

            {getSocialIcon(listItem.kind, classes.icon)}

            <InputFormItem
              field={listItem.kind}
              label={listItem.kind}
              defaultValue={listItem.value}
              onChange={(e) => onInputChange(listItem.kind, e.target.value)}
              className={classes.input}
            />
          </div>
        ))}
      </ReactSortable>
    </FormControl>
  )
}
