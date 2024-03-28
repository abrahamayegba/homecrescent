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
  DateTime: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminCreateInvite = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  roleId: Scalars['String']['input'];
};

export type AdminInvite = {
  __typename?: 'AdminInvite';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
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

export type City = {
  __typename?: 'City';
  cityName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  neighborhoods?: Maybe<Array<Maybe<Neighborhood>>>;
  projects?: Maybe<Array<Maybe<Project>>>;
  properties?: Maybe<Array<Maybe<Property>>>;
  state?: Maybe<State>;
  stateId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CompanyType = {
  __typename?: 'CompanyType';
  id?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Country = {
  __typename?: 'Country';
  countryName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  states?: Maybe<Array<Maybe<State>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateDeveloperCompany = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyEmail: Scalars['String']['input'];
  companyMobile: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  companyTypeId: Scalars['Int']['input'];
  registrationNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProject = {
  address: Scalars['String']['input'];
  cityId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  developerCompanyId?: InputMaybe<Scalars['String']['input']>;
  neighborhoodId?: InputMaybe<Scalars['String']['input']>;
  projectLayoutUrl?: InputMaybe<Scalars['String']['input']>;
  projectName: Scalars['String']['input'];
  projectStatusId: Scalars['Int']['input'];
};

export type CreateProperty = {
  categoryId: Scalars['String']['input'];
  cityId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  developerCompanyId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  projectId?: InputMaybe<Scalars['String']['input']>;
  propertyDetail: CreatePropertyDetails;
  propertyMedia?: InputMaybe<Array<InputMaybe<CreatePropertyMedia>>>;
  propertyStatusId: Scalars['Int']['input'];
  prototypeId?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePropertyDetails = {
  address: Scalars['String']['input'];
  bathrooms: Scalars['Int']['input'];
  bedrooms: Scalars['Int']['input'];
  canMortgage?: InputMaybe<Scalars['Boolean']['input']>;
  canPayInstallment?: InputMaybe<Scalars['Boolean']['input']>;
  dateCompleted: Scalars['Date']['input'];
  floors: Scalars['Int']['input'];
  hasGarden?: InputMaybe<Scalars['Boolean']['input']>;
  hasPool?: InputMaybe<Scalars['Boolean']['input']>;
  isFurnished?: InputMaybe<Scalars['Boolean']['input']>;
  isNewConstruction?: InputMaybe<Scalars['Boolean']['input']>;
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
  neighborhoodId?: InputMaybe<Scalars['String']['input']>;
  parkingSpaces: Scalars['Int']['input'];
  propertyOptionId: Scalars['Int']['input'];
  sizeSqft: Scalars['Int']['input'];
  toilets: Scalars['Int']['input'];
};

export type CreatePropertyMedia = {
  description?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  mediaCategoryId: Scalars['String']['input'];
  mediaUrl: Scalars['String']['input'];
};

export type CreatePrototype = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['String']['input'];
  prototypeName: Scalars['String']['input'];
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
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ownedBy?: Maybe<User>;
  ownedById?: Maybe<Scalars['String']['output']>;
  registrationNumber?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vetted?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type DurationType = {
  __typename?: 'DurationType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  durationType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  propertyPurchaseRequests?: Maybe<Array<Maybe<PropertyPurchaseRequest>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminLogOut?: Maybe<Scalars['Boolean']['output']>;
  adminSignIn?: Maybe<AdminSignUpResponse>;
  adminSignUp?: Maybe<AdminSignUpResponse>;
  adminSignUpAfterInvite?: Maybe<AdminSignUpResponse>;
  createAdminInvite?: Maybe<AdminInvite>;
  createDeveloperCompany?: Maybe<DeveloperCompany>;
  createProject?: Maybe<Project>;
  createProperty?: Maybe<Property>;
  createPrototype?: Maybe<Prototype>;
  deleteAllDeveloperCompanies?: Maybe<Scalars['Boolean']['output']>;
  deleteAllProjects?: Maybe<Scalars['Boolean']['output']>;
  deleteAllProperties?: Maybe<Scalars['Boolean']['output']>;
  deleteAllPropertyCategories?: Maybe<Scalars['Boolean']['output']>;
  deleteAllPrototypes?: Maybe<Scalars['Boolean']['output']>;
  deleteAllUsers?: Maybe<Scalars['Boolean']['output']>;
  deleteDeveloperCompany?: Maybe<Scalars['Boolean']['output']>;
  deleteProject?: Maybe<Scalars['Boolean']['output']>;
  deleteProperty?: Maybe<Scalars['Boolean']['output']>;
  deletePrototype?: Maybe<Scalars['Boolean']['output']>;
  deleteUserByEmail?: Maybe<Scalars['Boolean']['output']>;
  deleteUserById?: Maybe<Scalars['Boolean']['output']>;
  logOut?: Maybe<Scalars['Boolean']['output']>;
  resendVerificationCode?: Maybe<Scalars['Boolean']['output']>;
  signIn?: Maybe<UserSignInResponse>;
  signUp?: Maybe<UserSignUpResponse>;
  updateDeveloperCompany?: Maybe<DeveloperCompany>;
  updateProject?: Maybe<Project>;
  updateProperty?: Maybe<Property>;
  updatePrototype?: Maybe<Prototype>;
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


export type MutationCreateProjectArgs = {
  input: CreateProject;
};


export type MutationCreatePropertyArgs = {
  input: CreateProperty;
};


export type MutationCreatePrototypeArgs = {
  input: CreatePrototype;
};


export type MutationDeleteDeveloperCompanyArgs = {
  companyId: Scalars['String']['input'];
};


export type MutationDeleteProjectArgs = {
  projectId: Scalars['String']['input'];
};


export type MutationDeletePropertyArgs = {
  propertyId: Scalars['String']['input'];
};


export type MutationDeletePrototypeArgs = {
  prototypeId: Scalars['String']['input'];
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


export type MutationUpdateProjectArgs = {
  input: UpdateProject;
};


export type MutationUpdatePropertyArgs = {
  input: UpdateProperty;
};


export type MutationUpdatePrototypeArgs = {
  input: UpdatePrototype;
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

export type Neighborhood = {
  __typename?: 'Neighborhood';
  city?: Maybe<City>;
  cityId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Maybe<Project>>>;
  propertyDetails?: Maybe<Array<Maybe<PropertyDetail>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Project = {
  __typename?: 'Project';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<City>;
  cityId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  developerCompany?: Maybe<DeveloperCompany>;
  developerCompanyId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  neighborhood?: Maybe<Neighborhood>;
  neighborhoodId?: Maybe<Scalars['String']['output']>;
  projectLayoutUrl?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  projectStatus?: Maybe<ProjectStatus>;
  projectStatusId?: Maybe<Scalars['Int']['output']>;
  properties?: Maybe<Array<Maybe<Property>>>;
  prototypes?: Maybe<Array<Maybe<Prototype>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ProjectByCompanyResponse = {
  __typename?: 'ProjectByCompanyResponse';
  cursorId?: Maybe<Scalars['String']['output']>;
  projectsByCompany?: Maybe<Array<Maybe<Project>>>;
};

export type ProjectStatus = {
  __typename?: 'ProjectStatus';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  projectStatus?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Maybe<Project>>>;
};

export type Property = {
  __typename?: 'Property';
  category?: Maybe<PropertyCategory>;
  categoryId?: Maybe<Scalars['String']['output']>;
  city?: Maybe<City>;
  cityId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  developedBy?: Maybe<User>;
  developedById?: Maybe<Scalars['String']['output']>;
  developerCompany?: Maybe<DeveloperCompany>;
  developerCompanyId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['String']['output']>;
  propertiesCostHistory?: Maybe<Array<Maybe<PropertyCostHistory>>>;
  propertiesMedia?: Maybe<Array<Maybe<PropertyMedia>>>;
  propertyDetail?: Maybe<PropertyDetail>;
  propertyOwned?: Maybe<PropertyOwned>;
  propertyPurchaseRequests?: Maybe<Array<Maybe<PropertyPurchaseRequest>>>;
  propertyStatus?: Maybe<PropertyStatus>;
  propertyStatusId?: Maybe<Scalars['Int']['output']>;
  propertyUpdateRequests?: Maybe<Array<Maybe<PropertyUpdateRequest>>>;
  prototype?: Maybe<Prototype>;
  prototypeId?: Maybe<Scalars['String']['output']>;
  rents?: Maybe<Array<Maybe<PropertyRented>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PropertyCategory = {
  __typename?: 'PropertyCategory';
  categoryName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<Array<Maybe<Property>>>;
  prototypes?: Maybe<Array<Maybe<Prototype>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PropertyCostHistory = {
  __typename?: 'PropertyCostHistory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  effectiveDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['String']['output']>;
};

export type PropertyDetail = {
  __typename?: 'PropertyDetail';
  address?: Maybe<Scalars['String']['output']>;
  bathrooms?: Maybe<Scalars['Int']['output']>;
  bedrooms?: Maybe<Scalars['Int']['output']>;
  canMortgage?: Maybe<Scalars['Boolean']['output']>;
  canPayInstallment?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateCompleted?: Maybe<Scalars['Date']['output']>;
  floors?: Maybe<Scalars['Int']['output']>;
  hasGarden?: Maybe<Scalars['Boolean']['output']>;
  hasPool?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isFurnished?: Maybe<Scalars['Boolean']['output']>;
  isNewConstruction?: Maybe<Scalars['Boolean']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  neighborhood?: Maybe<Neighborhood>;
  neighborhoodId?: Maybe<Scalars['String']['output']>;
  parkingSpaces?: Maybe<Scalars['Int']['output']>;
  property?: Maybe<Property>;
  propertyOption?: Maybe<PropertyOption>;
  propertyOptionId?: Maybe<Scalars['Int']['output']>;
  sizeSqft?: Maybe<Scalars['Int']['output']>;
  toilets?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PropertyMedia = {
  __typename?: 'PropertyMedia';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  mediaUrl?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['String']['output']>;
  propertyMediaCategory?: Maybe<PropertyMediaCategory>;
  propertyMediaCategoryId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PropertyMediaCategory = {
  __typename?: 'PropertyMediaCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mediaCategory?: Maybe<Scalars['String']['output']>;
  propertiesMedia?: Maybe<Array<Maybe<PropertyMedia>>>;
  required?: Maybe<Scalars['Boolean']['output']>;
};

export type PropertyOption = {
  __typename?: 'PropertyOption';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  propertyDetails?: Maybe<Array<Maybe<PropertyDetail>>>;
  propertyOption?: Maybe<Scalars['String']['output']>;
};

export type PropertyOwned = {
  __typename?: 'PropertyOwned';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['String']['output']>;
  purchaseDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PropertyPurchaseRequest = {
  __typename?: 'PropertyPurchaseRequest';
  approvalDate?: Maybe<Scalars['DateTime']['output']>;
  approved?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  durationType?: Maybe<DurationType>;
  durationTypeId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['String']['output']>;
  purchaseDuration?: Maybe<Scalars['Int']['output']>;
  purchaseRequestType?: Maybe<PurchaseRequestType>;
  purchaseRequestTypeId?: Maybe<Scalars['Int']['output']>;
  requestDate?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PropertyRented = {
  __typename?: 'PropertyRented';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['String']['output']>;
  rentDateEnd?: Maybe<Scalars['DateTime']['output']>;
  rentDateStart?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PropertyStatus = {
  __typename?: 'PropertyStatus';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  properties?: Maybe<Array<Maybe<Property>>>;
  propertyStatus?: Maybe<Scalars['String']['output']>;
};

export type PropertyUpdateRequest = {
  __typename?: 'PropertyUpdateRequest';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['String']['output']>;
  requestUpdateStatus?: Maybe<RequestUpdateStatus>;
  requestUpdateStatusId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type Prototype = {
  __typename?: 'Prototype';
  category?: Maybe<PropertyCategory>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mediaUrl?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<Array<Maybe<Property>>>;
  prototypeName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PurchaseRequestType = {
  __typename?: 'PurchaseRequestType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  propertyPurchaseRequests?: Maybe<Array<Maybe<PropertyPurchaseRequest>>>;
  purchaseRequestType?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAdminById?: Maybe<Admin>;
  getAdminRoles?: Maybe<Array<Maybe<Role>>>;
  getAllRoles?: Maybe<Array<Maybe<Role>>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getCities?: Maybe<Array<Maybe<City>>>;
  getCitiesByStateId?: Maybe<Array<Maybe<City>>>;
  getCompanyTypes?: Maybe<Array<Maybe<CompanyType>>>;
  getDeveloperCompanies?: Maybe<Array<Maybe<DeveloperCompany>>>;
  getDeveloperCompanyById?: Maybe<DeveloperCompany>;
  getDeveloperCompanyByUser?: Maybe<DeveloperCompany>;
  getProjectById?: Maybe<Project>;
  getProjectStatuses?: Maybe<Array<Maybe<ProjectStatus>>>;
  getProjects?: Maybe<Array<Maybe<Project>>>;
  getProjectsByCompany?: Maybe<ProjectByCompanyResponse>;
  getProperties?: Maybe<Array<Maybe<Property>>>;
  getPropertiesByCompany?: Maybe<Array<Maybe<Property>>>;
  getPropertiesByProject?: Maybe<Array<Maybe<Property>>>;
  getPropertyByDeveloper?: Maybe<Array<Maybe<Property>>>;
  getPropertyById?: Maybe<Property>;
  getPropertyCategories?: Maybe<Array<Maybe<PropertyCategory>>>;
  getPropertyMediaCategories?: Maybe<Array<Maybe<PropertyMediaCategory>>>;
  getPropertyOptions?: Maybe<Array<Maybe<PropertyOption>>>;
  getPropertyStatuses?: Maybe<Array<Maybe<PropertyStatus>>>;
  getPrototypeById?: Maybe<Prototype>;
  getPrototypes?: Maybe<Array<Maybe<Prototype>>>;
  getPrototypesByProject?: Maybe<Array<Maybe<Prototype>>>;
  getStates?: Maybe<Array<Maybe<State>>>;
  getUserById?: Maybe<User>;
  getUserDeveloperRoles?: Maybe<Array<Maybe<Role>>>;
};


export type QueryGetCitiesByStateIdArgs = {
  stateId: Scalars['String']['input'];
};


export type QueryGetDeveloperCompanyByIdArgs = {
  companyId: Scalars['String']['input'];
};


export type QueryGetProjectByIdArgs = {
  projectId: Scalars['String']['input'];
};


export type QueryGetProjectsByCompanyArgs = {
  companyId: Scalars['String']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  sets?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetPropertiesByCompanyArgs = {
  companyId: Scalars['String']['input'];
};


export type QueryGetPropertiesByProjectArgs = {
  projectId: Scalars['String']['input'];
};


export type QueryGetPropertyByDeveloperArgs = {
  developerId: Scalars['String']['input'];
};


export type QueryGetPropertyByIdArgs = {
  propertyId: Scalars['String']['input'];
};


export type QueryGetPrototypeByIdArgs = {
  prototypeId: Scalars['String']['input'];
};


export type QueryGetPrototypesByProjectArgs = {
  projectId: Scalars['String']['input'];
};

export type RequestUpdateStatus = {
  __typename?: 'RequestUpdateStatus';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  propertyUpdateRequests?: Maybe<Array<Maybe<PropertyUpdateRequest>>>;
  requestUpdateStatus?: Maybe<Scalars['String']['output']>;
};

export type Role = {
  __typename?: 'Role';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  roleDescription?: Maybe<Scalars['String']['output']>;
  roleName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type State = {
  __typename?: 'State';
  cities?: Maybe<Array<Maybe<City>>>;
  country?: Maybe<Country>;
  countryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  stateName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
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

export type UpdateProject = {
  address?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  neighborhoodId?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['String']['input'];
  projectLayoutUrl?: InputMaybe<Scalars['String']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  projectStatusId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateProperty = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  propertyDetail?: InputMaybe<UpdatePropertyDetails>;
  propertyId: Scalars['String']['input'];
  propertyMedia?: InputMaybe<Array<InputMaybe<CreatePropertyMedia>>>;
  propertyStatusId?: InputMaybe<Scalars['Int']['input']>;
  prototypeId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePropertyDetails = {
  address?: InputMaybe<Scalars['String']['input']>;
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  canMortgage?: InputMaybe<Scalars['Boolean']['input']>;
  canPayInstallment?: InputMaybe<Scalars['Boolean']['input']>;
  dateCompleted?: InputMaybe<Scalars['Date']['input']>;
  floors?: InputMaybe<Scalars['Int']['input']>;
  hasGarden?: InputMaybe<Scalars['Boolean']['input']>;
  hasPool?: InputMaybe<Scalars['Boolean']['input']>;
  isFurnished?: InputMaybe<Scalars['Boolean']['input']>;
  isNewConstruction?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  neighborhoodId?: InputMaybe<Scalars['String']['input']>;
  parkingSpaces?: InputMaybe<Scalars['Int']['input']>;
  propertyOptionId?: InputMaybe<Scalars['Int']['input']>;
  sizeSqft?: InputMaybe<Scalars['Int']['input']>;
  toilets?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePrototype = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
  prototypeId: Scalars['String']['input'];
  prototypeName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  hasCompany?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isDeveloper?: Maybe<Scalars['Boolean']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
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
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  developerCompany?: Maybe<DeveloperCompany>;
  developerCompanyId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isOwner?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserDeveloperInvite = {
  __typename?: 'UserDeveloperInvite';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  developerCompany?: Maybe<DeveloperCompany>;
  developerCompanyId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserSignInResponse = {
  __typename?: 'UserSignInResponse';
  hasDeveloperCompany?: Maybe<Scalars['Boolean']['output']>;
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

export type GetPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPropertiesQuery = { __typename?: 'Query', getProperties?: Array<{ __typename?: 'Property', id?: string | null, description?: string | null, price?: number | null, city?: { __typename?: 'City', cityName?: string | null } | null, propertyStatus?: { __typename?: 'PropertyStatus', propertyStatus?: string | null } | null, propertyDetail?: { __typename?: 'PropertyDetail', longitude?: string | null, floors?: number | null, bedrooms?: number | null, bathrooms?: number | null, sizeSqft?: number | null, address?: string | null } | null, propertiesMedia?: Array<{ __typename?: 'PropertyMedia', id?: string | null, mediaUrl?: string | null, propertyMediaCategory?: { __typename?: 'PropertyMediaCategory', mediaCategory?: string | null } | null } | null> | null } | null> | null };

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
export const GetPropertiesDocument = gql`
    query GetProperties {
  getProperties {
    id
    description
    price
    city {
      cityName
    }
    propertyStatus {
      propertyStatus
    }
    propertyDetail {
      longitude
      floors
      bedrooms
      bathrooms
      sizeSqft
      floors
      address
    }
    propertiesMedia {
      id
      mediaUrl
      propertyMediaCategory {
        mediaCategory
      }
    }
  }
}
    `;

/**
 * __useGetPropertiesQuery__
 *
 * To run a query within a React component, call `useGetPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPropertiesQuery(baseOptions?: Apollo.QueryHookOptions<GetPropertiesQuery, GetPropertiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPropertiesQuery, GetPropertiesQueryVariables>(GetPropertiesDocument, options);
      }
export function useGetPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertiesQuery, GetPropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPropertiesQuery, GetPropertiesQueryVariables>(GetPropertiesDocument, options);
        }
export function useGetPropertiesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPropertiesQuery, GetPropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPropertiesQuery, GetPropertiesQueryVariables>(GetPropertiesDocument, options);
        }
export type GetPropertiesQueryHookResult = ReturnType<typeof useGetPropertiesQuery>;
export type GetPropertiesLazyQueryHookResult = ReturnType<typeof useGetPropertiesLazyQuery>;
export type GetPropertiesSuspenseQueryHookResult = ReturnType<typeof useGetPropertiesSuspenseQuery>;
export type GetPropertiesQueryResult = Apollo.QueryResult<GetPropertiesQuery, GetPropertiesQueryVariables>;
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