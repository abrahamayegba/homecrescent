// THIS IS A GENERATED FILE, use `npm run codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AdminCreateInvite = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  roleId: Scalars['String']['input'];
};

export type AdminInvite = {
  __typename?: 'AdminInvite';
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AdminSignUpAfterInvite = {
  inviteId: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AdminSignUpResponse = {
  __typename?: 'AdminSignUpResponse';
  access_token: Scalars['String']['output'];
  email: Scalars['String']['output'];
  refresh_token: Scalars['String']['output'];
};

export type AdminSigninInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  twoFACode: Scalars['String']['input'];
};

export type AdminSignupInput = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CompanyType = {
  __typename?: 'CompanyType';
  id?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CreateDeveloperCompany = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyEmail: Scalars['String']['input'];
  companyMobile: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  companyTypeId: Scalars['Int']['input'];
  registrationNumber?: InputMaybe<Scalars['String']['input']>;
};

export type DeveloperCompany = {
  __typename?: 'DeveloperCompany';
  address?: Maybe<Scalars['String']['output']>;
  companyEmail?: Maybe<Scalars['String']['output']>;
  companyLogo?: Maybe<Scalars['String']['output']>;
  companyMobile?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companyType?: Maybe<CompanyType>;
  companyTypeId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ownedBy?: Maybe<User>;
  ownedById?: Maybe<Scalars['String']['output']>;
  registrationNumber?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  vetted?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminLogOut?: Maybe<Scalars['Boolean']['output']>;
  adminSignIn?: Maybe<AdminSignUpResponse>;
  adminSignUp?: Maybe<AdminSignUpResponse>;
  adminSignUpAfterInvite?: Maybe<AdminSignUpResponse>;
  createAdminInvite?: Maybe<AdminInvite>;
  createDeveloperCompany?: Maybe<DeveloperCompany>;
  deleteAllDeveloperCompanies?: Maybe<Scalars['Boolean']['output']>;
  deleteAllUsers?: Maybe<Scalars['Boolean']['output']>;
  deleteDeveloperCompany?: Maybe<Scalars['Boolean']['output']>;
  deleteUserByEmail?: Maybe<Scalars['Boolean']['output']>;
  deleteUserById?: Maybe<Scalars['Boolean']['output']>;
  logOut?: Maybe<Scalars['Boolean']['output']>;
  resendVerificationCode?: Maybe<Scalars['Boolean']['output']>;
  signIn?: Maybe<UserSignInResponse>;
  signUp?: Maybe<UserSignUpResponse>;
  updateDeveloperCompany?: Maybe<DeveloperCompany>;
  userCreateInvite?: Maybe<UserDeveloperInvite>;
  userSignUpAfterInvite?: Maybe<UserSignUpResponse>;
  verification?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationAdminSignInArgs = {
  input: AdminSigninInput;
};


export type MutationAdminSignUpArgs = {
  input: AdminSignupInput;
};


export type MutationAdminSignUpAfterInviteArgs = {
  input: AdminSignUpAfterInvite;
};


export type MutationCreateAdminInviteArgs = {
  input?: InputMaybe<AdminCreateInvite>;
};


export type MutationCreateDeveloperCompanyArgs = {
  input?: InputMaybe<CreateDeveloperCompany>;
};


export type MutationDeleteDeveloperCompanyArgs = {
  companyId: Scalars['String']['input'];
};


export type MutationDeleteUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationDeleteUserByIdArgs = {
  userId: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  input: UserSigninInput;
};


export type MutationSignUpArgs = {
  input: UserSignUpInput;
};


export type MutationUpdateDeveloperCompanyArgs = {
  input?: InputMaybe<UpdateDeveloperCompany>;
};


export type MutationUserCreateInviteArgs = {
  input?: InputMaybe<UserCreateInvite>;
};


export type MutationUserSignUpAfterInviteArgs = {
  input: UserSignUpAfterInvite;
};


export type MutationVerificationArgs = {
  code: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAdminById?: Maybe<Admin>;
  getAdminRoles?: Maybe<Array<Maybe<Role>>>;
  getAllRoles?: Maybe<Array<Maybe<Role>>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getDeveloperCompanies?: Maybe<Array<Maybe<DeveloperCompany>>>;
  getDeveloperCompanyById?: Maybe<DeveloperCompany>;
  getDeveloperCompanyByUser?: Maybe<DeveloperCompany>;
  getUserById?: Maybe<User>;
  getUserDeveloperRoles?: Maybe<Array<Maybe<Role>>>;
};


export type QueryGetDeveloperCompanyByIdArgs = {
  companyId: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  roleDescription?: Maybe<Scalars['String']['output']>;
  roleName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type TokenResponse = {
  __typename?: 'TokenResponse';
  access_token: Scalars['String']['output'];
  refresh_token: Scalars['String']['output'];
};

export type UpdateDeveloperCompany = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyEmail?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['String']['input'];
  companyLogo?: InputMaybe<Scalars['String']['input']>;
  companyMobile?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyTypeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  registrationNumber?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  hasCompany?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isDeveloper?: Maybe<Scalars['Boolean']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  vetted?: Maybe<Scalars['Boolean']['output']>;
};

export type UserCreateInvite = {
  developerCompanyId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  roleId: Scalars['String']['input'];
};

export type UserDeveloperCompany = {
  __typename?: 'UserDeveloperCompany';
  createdAt?: Maybe<Scalars['Date']['output']>;
  developerCompany?: Maybe<DeveloperCompany>;
  developerCompanyId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isOwner?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserDeveloperInvite = {
  __typename?: 'UserDeveloperInvite';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  developerCompany?: Maybe<DeveloperCompany>;
  developerCompanyId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type UserSignInResponse = {
  __typename?: 'UserSignInResponse';
  token?: Maybe<TokenResponse>;
  user?: Maybe<User>;
  verified?: Maybe<Scalars['Boolean']['output']>;
  vetted?: Maybe<Scalars['Boolean']['output']>;
};

export type UserSignUpAfterInvite = {
  inviteId: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserSignUpInput = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  hasCompany?: InputMaybe<Scalars['Boolean']['input']>;
  isDeveloper?: InputMaybe<Scalars['Boolean']['input']>;
  mobile: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserSignUpResponse = {
  __typename?: 'UserSignUpResponse';
  token?: Maybe<TokenResponse>;
  user?: Maybe<User>;
};

export type UserSigninInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type GetAllRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRolesQuery = { __typename?: 'Query', getAllRoles?: Array<{ __typename?: 'Role', id?: string | null, roleName?: string | null, createdAt?: any | null } | null> | null };

export type GetUserByIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById?: { __typename?: 'User', id?: string | null, fullname?: string | null, email?: string | null, mobile?: string | null, vetted?: boolean | null, isDeveloper?: boolean | null, hasCompany?: boolean | null, roleId?: string | null, createdAt?: any | null, role?: { __typename?: 'Role', roleName?: string | null, roleDescription?: string | null, id?: string | null } | null } | null };

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = { __typename?: 'Mutation', logOut?: boolean | null };

export type SignInMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'UserSignInResponse', verified?: boolean | null, vetted?: boolean | null, token?: { __typename?: 'TokenResponse', access_token: string, refresh_token: string } | null, user?: { __typename?: 'User', fullname?: string | null, id?: string | null, email?: string | null, mobile?: string | null } | null } | null };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  password: Scalars['String']['input'];
  isDeveloper?: InputMaybe<Scalars['Boolean']['input']>;
  hasCompany?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'UserSignUpResponse', token?: { __typename?: 'TokenResponse', access_token: string, refresh_token: string } | null, user?: { __typename?: 'User', fullname?: string | null, id?: string | null, email?: string | null, mobile?: string | null } | null } | null };


export const GetAllRolesDocument = gql`
    query GetAllRoles {
  getAllRoles {
    id
    roleName
    createdAt
  }
}
    `;

/**
 * __useGetAllRolesQuery__
 *
 * To run a query within a React component, call `useGetAllRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRolesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllRolesQuery, GetAllRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRolesQuery, GetAllRolesQueryVariables>(GetAllRolesDocument, options);
      }
export function useGetAllRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRolesQuery, GetAllRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRolesQuery, GetAllRolesQueryVariables>(GetAllRolesDocument, options);
        }
export function useGetAllRolesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllRolesQuery, GetAllRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllRolesQuery, GetAllRolesQueryVariables>(GetAllRolesDocument, options);
        }
export type GetAllRolesQueryHookResult = ReturnType<typeof useGetAllRolesQuery>;
export type GetAllRolesLazyQueryHookResult = ReturnType<typeof useGetAllRolesLazyQuery>;
export type GetAllRolesSuspenseQueryHookResult = ReturnType<typeof useGetAllRolesSuspenseQuery>;
export type GetAllRolesQueryResult = Apollo.QueryResult<GetAllRolesQuery, GetAllRolesQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById {
  getUserById {
    id
    fullname
    email
    mobile
    vetted
    isDeveloper
    hasCompany
    role {
      roleName
      roleDescription
      id
    }
    roleId
    createdAt
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const LogOutDocument = gql`
    mutation LogOut {
  logOut
}
    `;
export type LogOutMutationFn = Apollo.MutationFunction<LogOutMutation, LogOutMutationVariables>;

/**
 * __useLogOutMutation__
 *
 * To run a mutation, you first call `useLogOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logOutMutation, { data, loading, error }] = useLogOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogOutMutation(baseOptions?: Apollo.MutationHookOptions<LogOutMutation, LogOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogOutMutation, LogOutMutationVariables>(LogOutDocument, options);
      }
export type LogOutMutationHookResult = ReturnType<typeof useLogOutMutation>;
export type LogOutMutationResult = Apollo.MutationResult<LogOutMutation>;
export type LogOutMutationOptions = Apollo.BaseMutationOptions<LogOutMutation, LogOutMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signIn(input: {email: $email, password: $password}) {
    verified
    vetted
    token {
      access_token
      refresh_token
    }
    user {
      fullname
      id
      email
      mobile
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $fullname: String!, $mobile: String!, $password: String!, $isDeveloper: Boolean, $hasCompany: Boolean) {
  signUp(
    input: {email: $email, fullname: $fullname, mobile: $mobile, password: $password, isDeveloper: $isDeveloper, hasCompany: $hasCompany}
  ) {
    token {
      access_token
      refresh_token
    }
    user {
      fullname
      id
      email
      mobile
    }
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      fullname: // value for 'fullname'
 *      mobile: // value for 'mobile'
 *      password: // value for 'password'
 *      isDeveloper: // value for 'isDeveloper'
 *      hasCompany: // value for 'hasCompany'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;