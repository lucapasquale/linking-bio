import { gql, useMutation } from '@apollo/client'

import { UploadImageMutation, MutationUploadImageArgs } from '~helpers/graphql/generated'

const UPLOAD_IMAGE_MUTATION = gql`
  mutation UploadImage($image: String!) {
    uploadImage(image: $image) {
      slug
    }
  }
`

export const useUploadImage = () =>
  useMutation<UploadImageMutation, MutationUploadImageArgs>(UPLOAD_IMAGE_MUTATION)
