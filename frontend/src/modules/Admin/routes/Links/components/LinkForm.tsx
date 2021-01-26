import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Link } from '~helpers/graphql/generated'
import { InputFormItem } from '~components/InputFormItem'

export type FormValues = Pick<Link, 'title' | 'url'>

type Props = {
  defaultValues?: Link
  onSubmit: (values: FormValues) => Promise<any>
}

export const LinkForm: FC<Props> = ({ defaultValues, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm<FormValues>({
    defaultValues,
  })

  return (
    <form id="link-form" onSubmit={handleSubmit(onSubmit)}>
      <InputFormItem
        field="title"
        label="Title"
        placeholder="My website"
        errorMessage={errors.title?.message}
        inputRef={register({ required: 'Title is required' })}
      />

      <InputFormItem
        field="url"
        label="URL"
        placeholder="www.example.com"
        errorMessage={errors.url?.message}
        inputRef={register({ required: 'URL is required' })}
      />
    </form>
  )
}
