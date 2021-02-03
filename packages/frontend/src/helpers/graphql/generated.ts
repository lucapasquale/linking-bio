export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddLinkInput = {
  title: Scalars['String'];
  url: Scalars['String'];
};

export type AddLinkResponse = {
  __typename?: 'AddLinkResponse';
  link: LinkType;
  page: PageType;
};

export type ChangePasswordResponse = {
  __typename?: 'ChangePasswordResponse';
  success: Scalars['Boolean'];
};

export type EditLinkInput = {
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EditLinkResponse = {
  __typename?: 'EditLinkResponse';
  link: LinkType;
  page: PageType;
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  success: Scalars['Boolean'];
};

export type LinkType = {
  __typename?: 'LinkType';
  id: Scalars['Int'];
  sortOrder: Scalars['Int'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addLink: AddLinkResponse;
  changePassword: ChangePasswordResponse;
  editLink: EditLinkResponse;
  forgotPassword: ForgotPasswordResponse;
  login: LoginResponse;
  recoverPassword: RecoverPasswordResponse;
  refreshToken: RefreshTokenResponse;
  removeLink: RemoveLinkResponse;
  signup: SignupResponse;
  sortLinks: SortLinkResponse;
  updatePage: UpdatePageResponse;
  updateProfile: UpdateProfileResponse;
  uploadImage: UploadImageResponse;
};


export type MutationAddLinkArgs = {
  input: AddLinkInput;
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
};


export type MutationEditLinkArgs = {
  input: EditLinkInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRecoverPasswordArgs = {
  input: RecoverPasswordInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
};


export type MutationRemoveLinkArgs = {
  linkId: Scalars['Int'];
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationSortLinksArgs = {
  linkIds: Array<Scalars['Int']>;
};


export type MutationUpdatePageArgs = {
  input: UpdatePageInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUploadImageArgs = {
  image: Scalars['String'];
};

export type Owner = {
  __typename?: 'Owner';
  avatarUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  social: Array<SocialLink>;
};

export enum PageTheme {
  Dark = 'DARK',
  Forest = 'FOREST',
  Light = 'LIGHT',
  Pink = 'PINK',
  Red = 'RED',
  Tan = 'TAN'
}

export type PageType = {
  __typename?: 'PageType';
  id: Scalars['Int'];
  links: Array<LinkType>;
  owner: Owner;
  slug: Scalars['String'];
  theme: PageTheme;
};

export type Query = {
  __typename?: 'Query';
  page?: Maybe<PageType>;
  user: UserType;
};


export type QueryPageArgs = {
  slug: Scalars['String'];
};

export type RecoverPasswordInput = {
  newPassword: Scalars['String'];
  recoveryToken: Scalars['String'];
  slug: Scalars['String'];
};

export type RecoverPasswordResponse = {
  __typename?: 'RecoverPasswordResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type RemoveLinkResponse = {
  __typename?: 'RemoveLinkResponse';
  link: LinkType;
  page: PageType;
};

export type SignupInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  slug: Scalars['String'];
};

export type SignupResponse = {
  __typename?: 'SignupResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type SocialLink = {
  __typename?: 'SocialLink';
  kind: SocialLinkKind;
  url: Scalars['String'];
  username: Scalars['String'];
};

export enum SocialLinkKind {
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  Linkedin = 'LINKEDIN',
  Reddit = 'REDDIT',
  Tiktok = 'TIKTOK',
  Twitter = 'TWITTER',
  Youtube = 'YOUTUBE'
}

export type SortLinkResponse = {
  __typename?: 'SortLinkResponse';
  page: PageType;
};

export type UpdatePageInput = {
  theme?: Maybe<PageTheme>;
};

export type UpdatePageResponse = {
  __typename?: 'UpdatePageResponse';
  page: PageType;
};

export type UpdateProfileInput = {
  avatarUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  social?: Maybe<Array<UpdateProfileSocialsInput>>;
};

export type UpdateProfileResponse = {
  __typename?: 'UpdateProfileResponse';
  user: UserType;
};

export type UpdateProfileSocialsInput = {
  kind: SocialLinkKind;
  value: Scalars['String'];
};

export type UploadImageResponse = {
  __typename?: 'UploadImageResponse';
  slug: Scalars['String'];
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['Int'];
  page: PageType;
  role: UserRole;
  social: Array<SocialLink>;
};

export type RefreshTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type RefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { refreshToken: (
    { __typename?: 'RefreshTokenResponse' }
    & Pick<RefreshTokenResponse, 'accessToken' | 'refreshToken'>
  ) }
);

export type UserSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type UserSlugQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'id'>
    & { page: (
      { __typename?: 'PageType' }
      & Pick<PageType, 'slug'>
    ) }
  ) }
);

export type UserPageQueryVariables = Exact<{ [key: string]: never; }>;


export type UserPageQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'id'>
    & { page: (
      { __typename?: 'PageType' }
      & Pick<PageType, 'slug' | 'theme'>
      & { owner: (
        { __typename?: 'Owner' }
        & Pick<Owner, 'name' | 'avatarUrl'>
        & { social: Array<(
          { __typename?: 'SocialLink' }
          & Pick<SocialLink, 'kind' | 'username' | 'url'>
        )> }
      ), links: Array<(
        { __typename?: 'LinkType' }
        & Pick<LinkType, 'id' | 'url' | 'title' | 'sortOrder'>
      )> }
    ) }
  ) }
);

export type SortLinksMutationVariables = Exact<{
  linkIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type SortLinksMutation = (
  { __typename?: 'Mutation' }
  & { sortLinks: (
    { __typename?: 'SortLinkResponse' }
    & { page: (
      { __typename?: 'PageType' }
      & { links: Array<(
        { __typename?: 'LinkType' }
        & Pick<LinkType, 'id' | 'title' | 'sortOrder'>
      )> }
    ) }
  ) }
);

export type AddLinkMutationVariables = Exact<{
  input: AddLinkInput;
}>;


export type AddLinkMutation = (
  { __typename?: 'Mutation' }
  & { addLink: (
    { __typename?: 'AddLinkResponse' }
    & { link: (
      { __typename?: 'LinkType' }
      & Pick<LinkType, 'id' | 'url' | 'title'>
    ), page: (
      { __typename?: 'PageType' }
      & Pick<PageType, 'slug'>
    ) }
  ) }
);

export type EditLinkMutationVariables = Exact<{
  input: EditLinkInput;
}>;


export type EditLinkMutation = (
  { __typename?: 'Mutation' }
  & { editLink: (
    { __typename?: 'EditLinkResponse' }
    & { link: (
      { __typename?: 'LinkType' }
      & Pick<LinkType, 'id' | 'url' | 'title'>
    ), page: (
      { __typename?: 'PageType' }
      & Pick<PageType, 'slug'>
    ) }
  ) }
);

export type RemoveLinkMutationVariables = Exact<{
  linkId: Scalars['Int'];
}>;


export type RemoveLinkMutation = (
  { __typename?: 'Mutation' }
  & { removeLink: (
    { __typename?: 'RemoveLinkResponse' }
    & { link: (
      { __typename?: 'LinkType' }
      & Pick<LinkType, 'id'>
    ), page: (
      { __typename?: 'PageType' }
      & Pick<PageType, 'slug'>
    ) }
  ) }
);

export type ChangePasswordMutationVariables = Exact<{
  password: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'ChangePasswordResponse' }
    & Pick<ChangePasswordResponse, 'success'>
  ) }
);

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;


export type UpdateProfileMutation = (
  { __typename?: 'Mutation' }
  & { updateProfile: (
    { __typename?: 'UpdateProfileResponse' }
    & { user: (
      { __typename?: 'UserType' }
      & Pick<UserType, 'id'>
    ) }
  ) }
);

export type UploadImageMutationVariables = Exact<{
  image: Scalars['String'];
}>;


export type UploadImageMutation = (
  { __typename?: 'Mutation' }
  & { uploadImage: (
    { __typename?: 'UploadImageResponse' }
    & Pick<UploadImageResponse, 'slug'>
  ) }
);

export type UpdatePageMutationVariables = Exact<{
  input: UpdatePageInput;
}>;


export type UpdatePageMutation = (
  { __typename?: 'Mutation' }
  & { updatePage: (
    { __typename?: 'UpdatePageResponse' }
    & { page: (
      { __typename?: 'PageType' }
      & Pick<PageType, 'slug' | 'theme'>
    ) }
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & { forgotPassword: (
    { __typename?: 'ForgotPasswordResponse' }
    & Pick<ForgotPasswordResponse, 'success'>
  ) }
);

export type EmailLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type EmailLoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken' | 'refreshToken'>
  ) }
);

export type RecoverPasswordMutationVariables = Exact<{
  input: RecoverPasswordInput;
}>;


export type RecoverPasswordMutation = (
  { __typename?: 'Mutation' }
  & { recoverPassword: (
    { __typename?: 'RecoverPasswordResponse' }
    & Pick<RecoverPasswordResponse, 'accessToken' | 'refreshToken'>
  ) }
);

export type EmailSignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type EmailSignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'SignupResponse' }
    & Pick<SignupResponse, 'accessToken' | 'refreshToken'>
  ) }
);

export type GetPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPageQuery = (
  { __typename?: 'Query' }
  & { page?: Maybe<(
    { __typename?: 'PageType' }
    & Pick<PageType, 'slug' | 'theme'>
    & { owner: (
      { __typename?: 'Owner' }
      & Pick<Owner, 'name' | 'avatarUrl'>
      & { social: Array<(
        { __typename?: 'SocialLink' }
        & Pick<SocialLink, 'kind' | 'username' | 'url'>
      )> }
    ), links: Array<(
      { __typename?: 'LinkType' }
      & Pick<LinkType, 'id' | 'url' | 'title' | 'sortOrder'>
    )> }
  )> }
);
