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
  link: Link;
  page: Page;
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
  link: Link;
  page: Page;
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  success: Scalars['Boolean'];
};

export type Link = {
  __typename?: 'Link';
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

export type Page = {
  __typename?: 'Page';
  id: Scalars['Int'];
  links: Array<Link>;
  owner: Owner;
  slug: Scalars['String'];
  theme: PageTheme;
};

export enum PageTheme {
  Dark = 'DARK',
  Forest = 'FOREST',
  Light = 'LIGHT',
  Pink = 'PINK',
  Red = 'RED',
  Tan = 'TAN'
}

export type Query = {
  __typename?: 'Query';
  page?: Maybe<Page>;
  user: User;
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
  link: Link;
  page: Page;
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
  page: Page;
};

export type UpdatePageInput = {
  theme?: Maybe<PageTheme>;
};

export type UpdatePageResponse = {
  __typename?: 'UpdatePageResponse';
  page: Page;
};

export type UpdateProfileInput = {
  avatarUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  social?: Maybe<Array<UpdateProfileSocialsInput>>;
};

export type UpdateProfileResponse = {
  __typename?: 'UpdateProfileResponse';
  user: User;
};

export type UpdateProfileSocialsInput = {
  kind: SocialLinkKind;
  value: Scalars['String'];
};

export type UploadImageResponse = {
  __typename?: 'UploadImageResponse';
  slug: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  page: Page;
  role: UserRole;
  social: Array<SocialLink>;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

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
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { page: (
      { __typename?: 'Page' }
      & Pick<Page, 'slug'>
    ) }
  ) }
);

export type UserPageQueryVariables = Exact<{ [key: string]: never; }>;


export type UserPageQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { page: (
      { __typename?: 'Page' }
      & Pick<Page, 'slug' | 'theme'>
      & { owner: (
        { __typename?: 'Owner' }
        & Pick<Owner, 'name' | 'avatarUrl'>
        & { social: Array<(
          { __typename?: 'SocialLink' }
          & Pick<SocialLink, 'kind' | 'username' | 'url'>
        )> }
      ), links: Array<(
        { __typename?: 'Link' }
        & Pick<Link, 'id' | 'url' | 'title' | 'sortOrder'>
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
      { __typename?: 'Page' }
      & { links: Array<(
        { __typename?: 'Link' }
        & Pick<Link, 'id' | 'title' | 'sortOrder'>
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
      { __typename?: 'Link' }
      & Pick<Link, 'id' | 'url' | 'title'>
    ), page: (
      { __typename?: 'Page' }
      & Pick<Page, 'slug'>
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
      { __typename?: 'Link' }
      & Pick<Link, 'id' | 'url' | 'title'>
    ), page: (
      { __typename?: 'Page' }
      & Pick<Page, 'slug'>
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
      { __typename?: 'Link' }
      & Pick<Link, 'id'>
    ), page: (
      { __typename?: 'Page' }
      & Pick<Page, 'slug'>
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
      { __typename?: 'User' }
      & Pick<User, 'id'>
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
      { __typename?: 'Page' }
      & Pick<Page, 'slug' | 'theme'>
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
    { __typename?: 'Page' }
    & Pick<Page, 'slug' | 'theme'>
    & { owner: (
      { __typename?: 'Owner' }
      & Pick<Owner, 'name' | 'avatarUrl'>
      & { social: Array<(
        { __typename?: 'SocialLink' }
        & Pick<SocialLink, 'kind' | 'username' | 'url'>
      )> }
    ), links: Array<(
      { __typename?: 'Link' }
      & Pick<Link, 'id' | 'url' | 'title' | 'sortOrder'>
    )> }
  )> }
);
