export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO string */
  DateTime: any;
  /** Json object with unknown keys & values */
  JsonObject: any;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  newsArticles: NewsArticleCollectionNode;
  permissions: PermissionCollectionNode;
  systemPermissions: SystemPermissionGqlNode;
  roles: RoleCollectionNode;
  rolePermissions: RolePermissionCollectionNode;
  users: UserCollectionNode;
  userByToken: UserNode;
  userRoles: UserRoleCollectionNode;
  npmsPackages: NpmsPackageCollectionNode;
  npmsDashboards: NpmsDashboardCollectionNode;
  npmsDashboardItems: NpmsDashboardItemCollectionNode;
  integrations: IntegrationCollectionNode;
  google: GoogleNode;
  googleOAuth2GetUrl: Scalars['String'];
};


export type RootQueryTypeNewsArticlesArgs = {
  query?: Maybe<NewsArticleQuery>;
};


export type RootQueryTypePermissionsArgs = {
  query?: Maybe<PermissionQuery>;
};


export type RootQueryTypeRolesArgs = {
  query?: Maybe<RoleQuery>;
};


export type RootQueryTypeRolePermissionsArgs = {
  query?: Maybe<RolePermissionQuery>;
};


export type RootQueryTypeUsersArgs = {
  query?: Maybe<UserQuery>;
};


export type RootQueryTypeUserByTokenArgs = {
  query?: Maybe<UserByToken>;
};


export type RootQueryTypeUserRolesArgs = {
  query?: Maybe<UserRoleQuery>;
};


export type RootQueryTypeNpmsPackagesArgs = {
  query?: Maybe<NpmsPackageQuery>;
};


export type RootQueryTypeNpmsDashboardsArgs = {
  query?: Maybe<NpmsDashboardQuery>;
};


export type RootQueryTypeNpmsDashboardItemsArgs = {
  query?: Maybe<NpmsDashboardItemQuery>;
};


export type RootQueryTypeIntegrationsArgs = {
  query?: Maybe<IntegrationQuery>;
};

export type NewsArticleCollectionNode = {
  __typename?: 'NewsArticleCollectionNode';
  nodes: Array<Maybe<NewsArticleNode>>;
  can: NewsArticleCollectionActions;
  pagination: Meta;
};

export type NewsArticleNode = {
  __typename?: 'NewsArticleNode';
  cursor: Scalars['String'];
  data: NewsArticleData;
  can: NewsArticleActions;
  relations: NewsArticleRelations;
};

export type NewsArticleData = {
  __typename?: 'NewsArticleData';
  id: Scalars['Int'];
  title: Scalars['String'];
  teaser: Scalars['String'];
  body: Scalars['String'];
  author_id: Scalars['Int'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at?: Maybe<Scalars['DateTime']>;
};


export type NewsArticleActions = {
  __typename?: 'NewsArticleActions';
  show: Scalars['Boolean'];
  update: Scalars['Boolean'];
  softDelete: Scalars['Boolean'];
  hardDelete: Scalars['Boolean'];
  restore: Scalars['Boolean'];
  submit: Scalars['Boolean'];
  reject: Scalars['Boolean'];
  approve: Scalars['Boolean'];
  publish: Scalars['Boolean'];
  unpublish: Scalars['Boolean'];
  schedule: Scalars['Boolean'];
};

export type NewsArticleRelations = {
  __typename?: 'NewsArticleRelations';
  author?: Maybe<UserNode>;
  status?: Maybe<UserNode>;
};

export type UserNode = {
  __typename?: 'UserNode';
  cursor: Scalars['String'];
  data: UserData;
  can: UserActions;
  relations: UserRelations;
};

export type UserData = {
  __typename?: 'UserData';
  id: Scalars['Int'];
  name: Scalars['String'];
  deactivated: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at?: Maybe<Scalars['DateTime']>;
};

export type UserActions = {
  __typename?: 'UserActions';
  show: Scalars['Boolean'];
  update: Scalars['Boolean'];
  softDelete: Scalars['Boolean'];
  hardDelete: Scalars['Boolean'];
  restore: Scalars['Boolean'];
  deactivate: Scalars['Boolean'];
  updatePassword: Scalars['Boolean'];
  createUserRoles: Scalars['Boolean'];
  hardDeleteUserRoles: Scalars['Boolean'];
  requestWelcome: Scalars['Boolean'];
  acceptWelcome: Scalars['Boolean'];
  requestVerificationEmail: Scalars['Boolean'];
  consumeVerificationEmail: Scalars['Boolean'];
  requestEmailChange: Scalars['Boolean'];
  consumeEmailChange: Scalars['Boolean'];
  requestForgottenPasswordReset: Scalars['Boolean'];
  consumeForgottenPasswordReset: Scalars['Boolean'];
};

export type UserRelations = {
  __typename?: 'UserRelations';
  userRoles: UserRoleCollectionNode;
  roles: RoleCollectionNode;
  permissions: PermissionCollectionNode;
  newsArticles: NewsArticleCollectionNode;
};


export type UserRelationsUserRolesArgs = {
  query?: Maybe<UserRoleQuery>;
};


export type UserRelationsRolesArgs = {
  query?: Maybe<RoleQuery>;
};


export type UserRelationsPermissionsArgs = {
  query?: Maybe<PermissionQuery>;
};


export type UserRelationsNewsArticlesArgs = {
  query?: Maybe<NewsArticleQuery>;
};

export type UserRoleCollectionNode = {
  __typename?: 'UserRoleCollectionNode';
  nodes: Array<Maybe<UserRoleNode>>;
  can: UserRoleCollectionActions;
  pagination: Meta;
};

export type UserRoleNode = {
  __typename?: 'UserRoleNode';
  cursor: Scalars['String'];
  data: UserRoleData;
  can: UserRoleActions;
  relations: UserRoleRelations;
};

export type UserRoleData = {
  __typename?: 'UserRoleData';
  id: Scalars['Int'];
  user_id: Scalars['Int'];
  role_id: Scalars['Int'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type UserRoleActions = {
  __typename?: 'UserRoleActions';
  show: Scalars['Boolean'];
};

export type UserRoleRelations = {
  __typename?: 'UserRoleRelations';
  user?: Maybe<UserNode>;
  role?: Maybe<RoleNode>;
};

export type RoleNode = {
  __typename?: 'RoleNode';
  cursor: Scalars['String'];
  data: RoleData;
  can: RoleActions;
  relations: RoleRelations;
};

export type RoleData = {
  __typename?: 'RoleData';
  id: Scalars['Int'];
  name: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at?: Maybe<Scalars['DateTime']>;
};

export type RoleActions = {
  __typename?: 'RoleActions';
  show: Scalars['Boolean'];
  update: Scalars['Boolean'];
  softDelete: Scalars['Boolean'];
  hardDelete: Scalars['Boolean'];
  createUserRoles: Scalars['Boolean'];
  hardDeleteUserRoles: Scalars['Boolean'];
  createRolePermissions: Scalars['Boolean'];
  hardDeleteRolePermissions: Scalars['Boolean'];
};

export type RoleRelations = {
  __typename?: 'RoleRelations';
  userRoles: UserRoleCollectionNode;
  rolePermissions: RolePermissionCollectionNode;
  permissions: PermissionCollectionNode;
  users: UserCollectionNode;
};


export type RoleRelationsUserRolesArgs = {
  query?: Maybe<UserRoleQuery>;
};


export type RoleRelationsRolePermissionsArgs = {
  query?: Maybe<RolePermissionQuery>;
};


export type RoleRelationsPermissionsArgs = {
  query?: Maybe<PermissionQuery>;
};


export type RoleRelationsUsersArgs = {
  query?: Maybe<UserQuery>;
};

export type UserRoleQuery = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<QuerySort>>;
  filter?: Maybe<Array<UserRoleQueryFilterFilterConditionGroup>>;
};

export type QuerySort = {
  field: Scalars['String'];
  dir: SortDirection;
};

export enum SortDirection {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type UserRoleQueryFilterFilterConditionGroup = {
  attr?: Maybe<UserRoleQueryFilterFilterAttributes>;
  or?: Maybe<Array<UserRoleQueryFilterFilterConditionGroup>>;
  and?: Maybe<Array<UserRoleQueryFilterFilterConditionGroup>>;
};

export type UserRoleQueryFilterFilterAttributes = {
  id?: Maybe<FilterFieldNumber>;
  user_id?: Maybe<FilterFieldNumber>;
  role_id?: Maybe<FilterFieldNumber>;
  created_at?: Maybe<FilterFieldDateTime>;
  updated_at?: Maybe<FilterFieldDateTime>;
};

export type FilterFieldNumber = {
  eq?: Maybe<Scalars['Float']>;
  neq?: Maybe<Scalars['Float']>;
  null?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  nbetween?: Maybe<FilterRangeFloat>;
  between?: Maybe<FilterRangeFloat>;
  in?: Maybe<Scalars['Float']>;
  nin?: Maybe<Scalars['Float']>;
  strict_left?: Maybe<FilterRangeFloat>;
  strict_right?: Maybe<FilterRangeFloat>;
};

export type FilterRangeFloat = {
  from: Scalars['Float'];
  to: Scalars['Float'];
};

export type FilterFieldDateTime = {
  eq?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  null?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  nbetween?: Maybe<FilterRangeDateTime>;
  between?: Maybe<FilterRangeDateTime>;
  in?: Maybe<Scalars['DateTime']>;
  nin?: Maybe<Scalars['DateTime']>;
  strict_left?: Maybe<FilterRangeDateTime>;
  strict_right?: Maybe<FilterRangeDateTime>;
};

export type FilterRangeDateTime = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

export type RolePermissionCollectionNode = {
  __typename?: 'RolePermissionCollectionNode';
  nodes: Array<Maybe<RolePermissionNode>>;
  actions: RolePermissionCollectionActions;
  pagination: Meta;
};

export type RolePermissionNode = {
  __typename?: 'RolePermissionNode';
  cursor: Scalars['String'];
  data: RolePermissionData;
  can: RolePermissionActions;
  relations: RolePermissionRelations;
};

export type RolePermissionData = {
  __typename?: 'RolePermissionData';
  id: Scalars['Int'];
  role_id: Scalars['Int'];
  permission_id: Scalars['Int'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type RolePermissionActions = {
  __typename?: 'RolePermissionActions';
  show: Scalars['Boolean'];
  delete: Scalars['Boolean'];
};

export type RolePermissionRelations = {
  __typename?: 'RolePermissionRelations';
  role?: Maybe<RoleNode>;
  permission?: Maybe<PermissionNode>;
};

export type PermissionNode = {
  __typename?: 'PermissionNode';
  cursor: Scalars['String'];
  data: PermissionData;
  can: PermissionActions;
  relations: PermissionRelations;
};

export type PermissionData = {
  __typename?: 'PermissionData';
  id: Scalars['Int'];
  name: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at?: Maybe<Scalars['DateTime']>;
};

export type PermissionActions = {
  __typename?: 'PermissionActions';
  show: Scalars['Boolean'];
  createRolePermissions: Scalars['Boolean'];
  hardDeleteRolePermissions: Scalars['Boolean'];
};

export type PermissionRelations = {
  __typename?: 'PermissionRelations';
  rolePermissions: RolePermissionCollectionNode;
  roles: RoleCollectionNode;
  users: UserCollectionNode;
};


export type PermissionRelationsRolePermissionsArgs = {
  query?: Maybe<PermissionQuery>;
};


export type PermissionRelationsRolesArgs = {
  query?: Maybe<RoleQuery>;
};


export type PermissionRelationsUsersArgs = {
  query?: Maybe<UserQuery>;
};

export type PermissionQuery = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<QuerySort>>;
  filter?: Maybe<Array<PermissionQueryFilterFilterConditionGroup>>;
};

export type PermissionQueryFilterFilterConditionGroup = {
  attr?: Maybe<PermissionQueryFilterFilterAttributes>;
  or?: Maybe<Array<PermissionQueryFilterFilterConditionGroup>>;
  and?: Maybe<Array<PermissionQueryFilterFilterConditionGroup>>;
};

export type PermissionQueryFilterFilterAttributes = {
  id?: Maybe<FilterFieldNumber>;
  role_id?: Maybe<FilterFieldNumber>;
  permission_id?: Maybe<FilterFieldNumber>;
  created_at?: Maybe<FilterFieldDateTime>;
  updated_at?: Maybe<FilterFieldDateTime>;
};

export type RoleCollectionNode = {
  __typename?: 'RoleCollectionNode';
  nodes: Array<Maybe<RoleNode>>;
  can: RoleCollectionActions;
  pagination: Meta;
};

export type RoleCollectionActions = {
  __typename?: 'RoleCollectionActions';
  show: Scalars['Boolean'];
  create: Scalars['Boolean'];
};

export type Meta = {
  __typename?: 'meta';
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  total: Scalars['Int'];
  page_number: Scalars['Int'];
  pages: Scalars['Int'];
  more: Scalars['Boolean'];
};

export type RoleQuery = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<QuerySort>>;
  filter?: Maybe<Array<RoleQueryFilterFilterConditionGroup>>;
};

export type RoleQueryFilterFilterConditionGroup = {
  attr?: Maybe<RoleQueryFilterFilterAttributes>;
  or?: Maybe<Array<RoleQueryFilterFilterConditionGroup>>;
  and?: Maybe<Array<RoleQueryFilterFilterConditionGroup>>;
};

export type RoleQueryFilterFilterAttributes = {
  id?: Maybe<FilterFieldNumber>;
  name?: Maybe<FilterFieldString>;
  created_at?: Maybe<FilterFieldDateTime>;
  updated_at?: Maybe<FilterFieldDateTime>;
  deleted_at?: Maybe<FilterFieldDateTime>;
};

export type FilterFieldString = {
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  null?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  nbetween?: Maybe<FilterRangeString>;
  between?: Maybe<FilterRangeString>;
  in?: Maybe<Scalars['String']>;
  nin?: Maybe<Scalars['String']>;
  ilike?: Maybe<Scalars['String']>;
  nilike?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  nlike?: Maybe<Scalars['String']>;
  substring?: Maybe<Scalars['String']>;
  iregexp?: Maybe<Scalars['String']>;
  niregexp?: Maybe<Scalars['String']>;
  regexp?: Maybe<Scalars['String']>;
  nregexp?: Maybe<Scalars['String']>;
};

export type FilterRangeString = {
  from: Scalars['String'];
  to: Scalars['String'];
};

export type UserCollectionNode = {
  __typename?: 'UserCollectionNode';
  nodes: Array<Maybe<UserNode>>;
  can: UserCollectionActions;
  pagination: Meta;
};

export type UserCollectionActions = {
  __typename?: 'UserCollectionActions';
  show: Scalars['Boolean'];
  register: Scalars['Boolean'];
  create: Scalars['Boolean'];
};

export type UserQuery = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<QuerySort>>;
  filter?: Maybe<Array<UserQueryFilterFilterConditionGroup>>;
};

export type UserQueryFilterFilterConditionGroup = {
  attr?: Maybe<UserQueryFilterFilterAttributes>;
  or?: Maybe<Array<UserQueryFilterFilterConditionGroup>>;
  and?: Maybe<Array<UserQueryFilterFilterConditionGroup>>;
};

export type UserQueryFilterFilterAttributes = {
  id?: Maybe<FilterFieldNumber>;
  name?: Maybe<FilterFieldString>;
  created_at?: Maybe<FilterFieldDateTime>;
  updated_at?: Maybe<FilterFieldDateTime>;
  deleted_at?: Maybe<FilterFieldDateTime>;
};

export type RolePermissionCollectionActions = {
  __typename?: 'RolePermissionCollectionActions';
  show: Scalars['Boolean'];
};

export type RolePermissionQuery = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<QuerySort>>;
  filter?: Maybe<Array<RolePermissionQueryFilterFilterConditionGroup>>;
};

export type RolePermissionQueryFilterFilterConditionGroup = {
  attr?: Maybe<RolePermissionQueryFilterFilterAttributes>;
  or?: Maybe<Array<RolePermissionQueryFilterFilterConditionGroup>>;
  and?: Maybe<Array<RolePermissionQueryFilterFilterConditionGroup>>;
};

export type RolePermissionQueryFilterFilterAttributes = {
  id?: Maybe<FilterFieldNumber>;
  role_id?: Maybe<FilterFieldNumber>;
  user_id?: Maybe<FilterFieldNumber>;
  created_at?: Maybe<FilterFieldDateTime>;
  updated_at?: Maybe<FilterFieldDateTime>;
  deleted_at?: Maybe<FilterFieldDateTime>;
};

export type PermissionCollectionNode = {
  __typename?: 'PermissionCollectionNode';
  nodes: Array<Maybe<PermissionNode>>;
  actions: PermissionCollectionActions;
  pagination: Meta;
};

export type PermissionCollectionActions = {
  __typename?: 'PermissionCollectionActions';
  show: Scalars['Boolean'];
  create: Scalars['Boolean'];
};

export type UserRoleCollectionActions = {
  __typename?: 'UserRoleCollectionActions';
  show: Scalars['Boolean'];
};

export type NewsArticleQuery = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<QuerySort>>;
  filter?: Maybe<Array<NewsArticleQueryFilterFilterConditionGroup>>;
};

export type NewsArticleQueryFilterFilterConditionGroup = {
  attr?: Maybe<NewsArticleQueryFilterFilterAttributes>;
  or?: Maybe<Array<NewsArticleQueryFilterFilterConditionGroup>>;
  and?: Maybe<Array<NewsArticleQueryFilterFilterConditionGroup>>;
};

export type NewsArticleQueryFilterFilterAttributes = {
  id?: Maybe<FilterFieldNumber>;
  title?: Maybe<FilterFieldString>;
  teaser?: Maybe<FilterFieldString>;
  body?: Maybe<FilterFieldString>;
  author_id?: Maybe<FilterFieldNumber>;
  created_at?: Maybe<FilterFieldDateTime>;
  updated_at?: Maybe<FilterFieldDateTime>;
  deleted_at?: Maybe<FilterFieldDateTime>;
};

export type NewsArticleCollectionActions = {
  __typename?: 'NewsArticleCollectionActions';
  show: Scalars['Boolean'];
  create: Scalars['Boolean'];
};

export type SystemPermissionGqlNode = {
  __typename?: 'SystemPermissionGqlNode';
  pub: Array<Maybe<PermissionNode>>;
  authenticated: Array<Maybe<PermissionNode>>;
};

export type UserByToken = {
  token: Scalars['String'];
};

export type NpmsPackageCollectionNode = {
  __typename?: 'NpmsPackageCollectionNode';
  nodes: Array<Maybe<NpmsPackageNode>>;
  can: NpmsPackageCollectionActions;
  pagination: Meta;
};

export type NpmsPackageNode = {
  __typename?: 'NpmsPackageNode';
  cursor: Scalars['String'];
  data: NpmsPackageData;
  can: NpmsPackageActions;
  relations: NpmsPackageRelations;
};

export type NpmsPackageData = {
  __typename?: 'NpmsPackageData';
  id: Scalars['Int'];
  name: Scalars['String'];
  raw: Scalars['String'];
  data?: Maybe<NpmsPackageDataInfo>;
  last_ran_at: Scalars['DateTime'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at?: Maybe<Scalars['DateTime']>;
};

export type NpmsPackageDataInfo = {
  __typename?: 'NpmsPackageDataInfo';
  analyzedAt?: Maybe<Scalars['DateTime']>;
  collected?: Maybe<NpmsPackageDataInfoCollected>;
  evaluation?: Maybe<NpmsPackageDataInfoEvaluation>;
  score?: Maybe<NpmsPackageDataInfoScore>;
  error?: Maybe<Scalars['JsonObject']>;
};

export type NpmsPackageDataInfoCollected = {
  __typename?: 'NpmsPackageDataInfoCollected';
  metadata?: Maybe<NpmsPackageDataInfoCollectedMetadata>;
  npm?: Maybe<NpmsPackageDataInfoCollectedNpm>;
  github?: Maybe<NpmsPackageDataInfoCollectedGithub>;
  source?: Maybe<NpmsPackageDataInfoCollectedSource>;
};

export type NpmsPackageDataInfoCollectedMetadata = {
  __typename?: 'NpmsPackageDataInfoCollectedMetadata';
  releases?: Maybe<Array<NpmsPackageDataInfoCollectedMetadataReleases>>;
  hasTestScript?: Maybe<Scalars['Boolean']>;
  hasSelectiveFiles?: Maybe<Scalars['Boolean']>;
  readme?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Scalars['String']>>;
  date?: Maybe<Scalars['DateTime']>;
  author?: Maybe<NpmsPackageInfoCollectedMetadataUser>;
  publisher?: Maybe<NpmsPackageInfoCollectedMetadataUser>;
  maintainers?: Maybe<Array<NpmsPackageInfoCollectedMetadataUser>>;
  repository?: Maybe<NpmsPackageDataInfoCollectedMetadataRepository>;
};

export type NpmsPackageDataInfoCollectedMetadataReleases = {
  __typename?: 'NpmsPackageDataInfoCollectedMetadataReleases';
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  count?: Maybe<Scalars['Int']>;
};

export type NpmsPackageInfoCollectedMetadataUser = {
  __typename?: 'NpmsPackageInfoCollectedMetadataUser';
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type NpmsPackageDataInfoCollectedMetadataRepository = {
  __typename?: 'NpmsPackageDataInfoCollectedMetadataRepository';
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type NpmsPackageDataInfoCollectedNpm = {
  __typename?: 'NpmsPackageDataInfoCollectedNpm';
  downloads?: Maybe<NpmsPackageDataInfoCollectedNpmDownloads>;
  dependentsCount?: Maybe<Scalars['Int']>;
  dependencies?: Maybe<Scalars['JsonObject']>;
  devDependencies?: Maybe<Scalars['JsonObject']>;
  starsCount?: Maybe<Scalars['Int']>;
};

export type NpmsPackageDataInfoCollectedNpmDownloads = {
  __typename?: 'NpmsPackageDataInfoCollectedNpmDownloads';
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  count?: Maybe<Scalars['Int']>;
};


export type NpmsPackageDataInfoCollectedGithub = {
  __typename?: 'NpmsPackageDataInfoCollectedGithub';
  homepage?: Maybe<Scalars['String']>;
  starsCount?: Maybe<Scalars['Int']>;
  forksCount?: Maybe<Scalars['Int']>;
  subscribersCount?: Maybe<Scalars['Int']>;
  issues?: Maybe<NpmsPackageDataInfoCollectedGithubIssues>;
  contributors?: Maybe<Array<NpmsPackageDataInfoCollectedGitHubContributor>>;
  commits?: Maybe<Array<NpmsPackageDataInfCollectedGitHubCommit>>;
  statuses?: Maybe<Array<NpmsPackageDataInfoCollectedGitHubStatus>>;
};

export type NpmsPackageDataInfoCollectedGithubIssues = {
  __typename?: 'NpmsPackageDataInfoCollectedGithubIssues';
  count?: Maybe<Scalars['Int']>;
  openCount?: Maybe<Scalars['Int']>;
  distribution?: Maybe<NpmsPackageDataInfoCollectedGithubIssuesDistribution>;
  isDisabled?: Maybe<Scalars['Boolean']>;
};

export type NpmsPackageDataInfoCollectedGithubIssuesDistribution = {
  __typename?: 'NpmsPackageDataInfoCollectedGithubIssuesDistribution';
  _3600?: Maybe<Scalars['Int']>;
  _10800?: Maybe<Scalars['Int']>;
  _32400?: Maybe<Scalars['Int']>;
  _97200?: Maybe<Scalars['Int']>;
  _291600?: Maybe<Scalars['Int']>;
  _874800?: Maybe<Scalars['Int']>;
  _2624400?: Maybe<Scalars['Int']>;
  _7873200?: Maybe<Scalars['Int']>;
  _23619600?: Maybe<Scalars['Int']>;
  _70858800?: Maybe<Scalars['Int']>;
  _212576400?: Maybe<Scalars['Int']>;
};

export type NpmsPackageDataInfoCollectedGitHubContributor = {
  __typename?: 'NpmsPackageDataInfoCollectedGitHubContributor';
  username?: Maybe<Scalars['String']>;
  commitsCount?: Maybe<Scalars['String']>;
};

export type NpmsPackageDataInfCollectedGitHubCommit = {
  __typename?: 'NpmsPackageDataInfCollectedGitHubCommit';
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  count?: Maybe<Scalars['Int']>;
};

export type NpmsPackageDataInfoCollectedGitHubStatus = {
  __typename?: 'NpmsPackageDataInfoCollectedGitHubStatus';
  context?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type NpmsPackageDataInfoCollectedSource = {
  __typename?: 'NpmsPackageDataInfoCollectedSource';
  files?: Maybe<NpmsPackageDataInfoCollectedNpmSourceFiles>;
  linters?: Maybe<Array<Scalars['String']>>;
  coverage?: Maybe<Scalars['Float']>;
};

export type NpmsPackageDataInfoCollectedNpmSourceFiles = {
  __typename?: 'NpmsPackageDataInfoCollectedNpmSourceFiles';
  readmeSize?: Maybe<Scalars['Int']>;
  testsSize?: Maybe<Scalars['Int']>;
  hasChangeLog?: Maybe<Scalars['Boolean']>;
};

export type NpmsPackageDataInfoEvaluation = {
  __typename?: 'NpmsPackageDataInfoEvaluation';
  quality?: Maybe<NpmsPackageDataInfoEvaluationQuality>;
  popularity?: Maybe<NpmsPackageDataInfoEvaluationPopularity>;
  maintenance?: Maybe<NpmsPackageDataInfoEvaluationMaintenance>;
};

export type NpmsPackageDataInfoEvaluationQuality = {
  __typename?: 'NpmsPackageDataInfoEvaluationQuality';
  carefulness?: Maybe<Scalars['Float']>;
  tests?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  branding?: Maybe<Scalars['Float']>;
};

export type NpmsPackageDataInfoEvaluationPopularity = {
  __typename?: 'NpmsPackageDataInfoEvaluationPopularity';
  communityInterest?: Maybe<Scalars['Float']>;
  downloadsCount?: Maybe<Scalars['Float']>;
  downloadsAcceleration?: Maybe<Scalars['Float']>;
  dependentsCount?: Maybe<Scalars['Float']>;
};

export type NpmsPackageDataInfoEvaluationMaintenance = {
  __typename?: 'NpmsPackageDataInfoEvaluationMaintenance';
  releasesFrequency?: Maybe<Scalars['Float']>;
  commitsFrequency?: Maybe<Scalars['Float']>;
  openIssues?: Maybe<Scalars['Float']>;
  issuesDistribution?: Maybe<Scalars['Float']>;
};

export type NpmsPackageDataInfoScore = {
  __typename?: 'NpmsPackageDataInfoScore';
  final?: Maybe<Scalars['Float']>;
  detail?: Maybe<NpmsPackageDataInfoScoreDetail>;
};

export type NpmsPackageDataInfoScoreDetail = {
  __typename?: 'NpmsPackageDataInfoScoreDetail';
  quality?: Maybe<Scalars['Float']>;
  popularity?: Maybe<Scalars['Float']>;
  maintenance?: Maybe<Scalars['Float']>;
};

export type NpmsPackageActions = {
  __typename?: 'NpmsPackageActions';
  show: Scalars['Boolean'];
  softDelete: Scalars['Boolean'];
  hardDelete: Scalars['Boolean'];
  restore: Scalars['Boolean'];
};

export type NpmsPackageRelations = {
  __typename?: 'NpmsPackageRelations';
  dashboardItems: NpmsDashboardItemCollectionNode;
  dashboards: NpmsDashboardCollectionNode;
};


export type NpmsPackageRelationsDashboardItemsArgs = {
  query?: Maybe<NpmsDashboardItemQuery>;
};


export type NpmsPackageRelationsDashboardsArgs = {
  query?: Maybe<NpmsDashboardQuery>;
};

export type NpmsDashboardItemCollectionNode = {
  __typename?: 'NpmsDashboardItemCollectionNode';
  nodes: Array<Maybe<NpmsDashboardItemNode>>;
  can: NpmsDashboardItemCollectionActions;
  pagination: Meta;
};

export type NpmsDashboardItemNode = {
  __typename?: 'NpmsDashboardItemNode';
  cursor: Scalars['String'];
  data: NpmsDashboardItemData;
  can: NpmsDashboardItemActions;
  relations: NpmsDashboardItemRelations;
};

export type NpmsDashboardItemData = {
  __typename?: 'NpmsDashboardItemData';
  id: Scalars['Int'];
  dashboard_id: Scalars['Int'];
  npms_package_id: Scalars['Int'];
  order: Scalars['Int'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at?: Maybe<Scalars['DateTime']>;
};

export type NpmsDashboardItemActions = {
  __typename?: 'NpmsDashboardItemActions';
  show: Scalars['Boolean'];
  hardDelete: Scalars['Boolean'];
};

export type NpmsDashboardItemRelations = {
  __typename?: 'NpmsDashboardItemRelations';
  dashboard?: Maybe<NpmsDashboardNode>;
  npmsPackage?: Maybe<NpmsPackageNode>;
};

export type NpmsDashboardNode = {
  __typename?: 'NpmsDashboardNode';
  cursor: Scalars['String'];
  data: NpmsDashboardData;
  can: NpmsDashboardActions;
  relations: NpmsDashboardRelations;
};

export type NpmsDashboardData = {
  __typename?: 'NpmsDashboardData';
  id: Scalars['Int'];
  name: Scalars['String'];
  order: Scalars['Int'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at?: Maybe<Scalars['DateTime']>;
};

export type NpmsDashboardActions = {
  __typename?: 'NpmsDashboardActions';
  show: Scalars['Boolean'];
  update: Scalars['Boolean'];
  softDelete: Scalars['Boolean'];
  hardDelete: Scalars['Boolean'];
  restore: Scalars['Boolean'];
  createNpmsDashboardItem: Scalars['Boolean'];
  hardDeleteNpmsDashboardItem: Scalars['Boolean'];
  submit: Scalars['Boolean'];
  reject: Scalars['Boolean'];
  approve: Scalars['Boolean'];
  publish: Scalars['Boolean'];
  unpublish: Scalars['Boolean'];
};

export type NpmsDashboardRelations = {
  __typename?: 'NpmsDashboardRelations';
  items: NpmsDashboardItemCollectionNode;
  npmsPackages: NpmsPackageCollectionNode;
};


export type NpmsDashboardRelationsItemsArgs = {
  query?: Maybe<NpmsDashboardItemQuery>;
};


export type NpmsDashboardRelationsNpmsPackagesArgs = {
  query?: Maybe<NpmsPackageQuery>;
};

export type NpmsDashboardItemQuery = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<QuerySort>>;
  filter?: Maybe<Array<NpmsDashboardItemQueryFilterFilterConditionGroup>>;
};

export type NpmsDashboardItemQueryFilterFilterConditionGroup = {
  attr?: Maybe<NpmsDashboardItemQueryFilterFilterAttributes>;
  or?: Maybe<Array<NpmsDashboardItemQueryFilterFilterConditionGroup>>;
  and?: Maybe<Array<NpmsDashboardItemQueryFilterFilterConditionGroup>>;
};

export type NpmsDashboardItemQueryFilterFilterAttributes = {
  id?: Maybe<FilterFieldNumber>;
  dashboard_id?: Maybe<FilterFieldNumber>;
  npms_id?: Maybe<FilterFieldNumber>;
  created_at?: Maybe<FilterFieldDateTime>;
  updated_at?: Maybe<FilterFieldDateTime>;
  deleted_at?: Maybe<FilterFieldDateTime>;
};

export type NpmsPackageQuery = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<QuerySort>>;
  filter?: Maybe<Array<NpmsPackageQueryFilterFilterConditionGroup>>;
};

export type NpmsPackageQueryFilterFilterConditionGroup = {
  attr?: Maybe<NpmsPackageQueryFilterFilterAttributes>;
  or?: Maybe<Array<NpmsPackageQueryFilterFilterConditionGroup>>;
  and?: Maybe<Array<NpmsPackageQueryFilterFilterConditionGroup>>;
};

export type NpmsPackageQueryFilterFilterAttributes = {
  id?: Maybe<FilterFieldNumber>;
  name?: Maybe<FilterFieldString>;
  last_ran_at?: Maybe<FilterFieldDateTime>;
  created_at?: Maybe<FilterFieldDateTime>;
  updated_at?: Maybe<FilterFieldDateTime>;
  deleted_at?: Maybe<FilterFieldDateTime>;
};

export type NpmsDashboardItemCollectionActions = {
  __typename?: 'NpmsDashboardItemCollectionActions';
  show: Scalars['Boolean'];
};

export type NpmsDashboardCollectionNode = {
  __typename?: 'NpmsDashboardCollectionNode';
  nodes: Array<Maybe<NpmsDashboardNode>>;
  can: NpmsDashboardCollectionActions;
  pagination: Meta;
};

export type NpmsDashboardCollectionActions = {
  __typename?: 'NpmsDashboardCollectionActions';
  show: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  create: Scalars['Boolean'];
};

export type NpmsDashboardQuery = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<QuerySort>>;
  filter?: Maybe<Array<NpmsDashboardQueryFilterFilterConditionGroup>>;
};

export type NpmsDashboardQueryFilterFilterConditionGroup = {
  attr?: Maybe<NpmsDashboardQueryFilterFilterAttributes>;
  or?: Maybe<Array<NpmsDashboardQueryFilterFilterConditionGroup>>;
  and?: Maybe<Array<NpmsDashboardQueryFilterFilterConditionGroup>>;
};

export type NpmsDashboardQueryFilterFilterAttributes = {
  id?: Maybe<FilterFieldNumber>;
  name?: Maybe<FilterFieldString>;
  created_at?: Maybe<FilterFieldDateTime>;
  updated_at?: Maybe<FilterFieldDateTime>;
  deleted_at?: Maybe<FilterFieldDateTime>;
};

export type NpmsPackageCollectionActions = {
  __typename?: 'NpmsPackageCollectionActions';
  show: Scalars['Boolean'];
  create: Scalars['Boolean'];
};

export type IntegrationCollectionNode = {
  __typename?: 'IntegrationCollectionNode';
  nodes: Array<Maybe<IntegrationNode>>;
  actions: IntegrationCollectionActions;
  pagination: Meta;
};

export type IntegrationNode = {
  __typename?: 'IntegrationNode';
  cursor: Scalars['String'];
  data: IntegrationData;
  can: IntegrationActions;
  relations: IntegrationRelations;
};

export type IntegrationData = {
  __typename?: 'IntegrationData';
  id: Scalars['Int'];
  name: Scalars['String'];
  error?: Maybe<Scalars['JsonObject']>;
  public?: Maybe<Scalars['JsonObject']>;
  is_connected: Scalars['Boolean'];
  decrypted_init?: Maybe<Scalars['JsonObject']>;
  decrypted_state?: Maybe<Scalars['JsonObject']>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type IntegrationActions = {
  __typename?: 'IntegrationActions';
  show: Scalars['Boolean'];
  initialise: Scalars['Boolean'];
};

export type IntegrationRelations = {
  __typename?: 'IntegrationRelations';
  self?: Maybe<IntegrationNode>;
};

export type IntegrationCollectionActions = {
  __typename?: 'IntegrationCollectionActions';
  show: Scalars['Boolean'];
  initialise: Scalars['Boolean'];
};

export type IntegrationQuery = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sorts?: Maybe<Array<QuerySort>>;
  filter?: Maybe<Array<IntegrationQueryFilterFilterConditionGroup>>;
};

export type IntegrationQueryFilterFilterConditionGroup = {
  attr?: Maybe<IntegrationQueryFilterFilterAttributes>;
  or?: Maybe<Array<IntegrationQueryFilterFilterConditionGroup>>;
  and?: Maybe<Array<IntegrationQueryFilterFilterConditionGroup>>;
};

export type IntegrationQueryFilterFilterAttributes = {
  id?: Maybe<FilterFieldNumber>;
  created_at?: Maybe<FilterFieldDateTime>;
  updated_at?: Maybe<FilterFieldDateTime>;
};

export type GoogleNode = {
  __typename?: 'GoogleNode';
  cursor: Scalars['String'];
  integration: IntegrationNode;
  can: GoogleActions;
};

export type GoogleActions = {
  __typename?: 'GoogleActions';
  show: Scalars['Boolean'];
  oauth2: Scalars['Boolean'];
  sendGmail: Scalars['Boolean'];
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  createNewsArticle: NewsArticleNode;
  updateNewsArticle: NewsArticleNode;
  deleteNewsArticle: NewsArticleNode;
  createNpmsPackage: NpmsPackageNode;
  sortNpmsDashboards: Scalars['Boolean'];
  createNpmsDashboard: NpmsDashboardNode;
  updateNpmsDashboard: NpmsDashboardNode;
  softDeleteNpmsDashboard: Scalars['Boolean'];
  hardDeleteNpmsDashboard: Scalars['Boolean'];
  restoreNpmsDashboard: NpmsDashboardNode;
  submitNpmsDashboard: NpmsDashboardNode;
  rejectNpmsDashboard: NpmsDashboardNode;
  approveNpmsDashboard: NpmsDashboardNode;
  publishNpmsDashboard: NpmsDashboardNode;
  unpublishNpmsDashboard: NpmsDashboardNode;
  createNpmsDashboardItem: NpmsDashboardItemNode;
  hardDeleteNpmsDashboardItem: NpmsDashboardItemNode;
  createRolePermission: RolePermissionNode;
  deleteRolePermission: Scalars['Boolean'];
  createRole: RoleNode;
  updateRole: RoleNode;
  softDeleteRole: Scalars['Boolean'];
  restoreRole: Scalars['Boolean'];
  createUser: UserNode;
  updateUser: UserNode;
  softDeleteUser: Scalars['Boolean'];
  hardDeleteUser: Scalars['Boolean'];
  requestForgottenUserPasswordReset: Scalars['Boolean'];
  consumeForgottenUserPasswordReset: AuthorisationGqlNode;
  requestUserWelcome: Scalars['Boolean'];
  acceptUserWelcome: AuthorisationGqlNode;
  initialiseIntegration: IntegrationNode;
  googleOAuth2HandleCode: GoogleNode;
  googleSendEmail: Scalars['JsonObject'];
};


export type RootMutationTypeCreateNewsArticleArgs = {
  dto: CreateNewsArticle;
};


export type RootMutationTypeUpdateNewsArticleArgs = {
  dto: UpdateNewsArticle;
};


export type RootMutationTypeDeleteNewsArticleArgs = {
  dto: DeleteNewsArticle;
};


export type RootMutationTypeCreateNpmsPackageArgs = {
  dto: CreateNpmsPackage;
};


export type RootMutationTypeSortNpmsDashboardsArgs = {
  dto: SortNpmsDashboard;
};


export type RootMutationTypeCreateNpmsDashboardArgs = {
  dto: CreateNpmsDashboard;
};


export type RootMutationTypeUpdateNpmsDashboardArgs = {
  dto: UpdateNpmsDashboard;
};


export type RootMutationTypeSoftDeleteNpmsDashboardArgs = {
  dto: SoftDeleteNpmsDashboard;
};


export type RootMutationTypeHardDeleteNpmsDashboardArgs = {
  dto: HardDeleteNpmsDashboard;
};


export type RootMutationTypeRestoreNpmsDashboardArgs = {
  dto: RestoreNpmsDashboard;
};


export type RootMutationTypeSubmitNpmsDashboardArgs = {
  dto: SubmitNpmsDashboard;
};


export type RootMutationTypeRejectNpmsDashboardArgs = {
  dto: RejectNpmsDashboard;
};


export type RootMutationTypeApproveNpmsDashboardArgs = {
  dto: ApproveNpmsDashboard;
};


export type RootMutationTypePublishNpmsDashboardArgs = {
  dto: PublishNpmsDashboard;
};


export type RootMutationTypeUnpublishNpmsDashboardArgs = {
  dto: UnpublishNpmsDashboard;
};


export type RootMutationTypeCreateNpmsDashboardItemArgs = {
  dto: CreateNpmsDashboardItem;
};


export type RootMutationTypeHardDeleteNpmsDashboardItemArgs = {
  dto: SoftDeleteNpmsDashboardItem;
};


export type RootMutationTypeCreateRolePermissionArgs = {
  dto: CreateRolePermissionGqlInput;
};


export type RootMutationTypeDeleteRolePermissionArgs = {
  dto: DeleteRolePermission;
};


export type RootMutationTypeCreateRoleArgs = {
  dto: CreateRole;
};


export type RootMutationTypeUpdateRoleArgs = {
  dto: UpdateRole;
};


export type RootMutationTypeSoftDeleteRoleArgs = {
  dto: DeleteRole;
};


export type RootMutationTypeRestoreRoleArgs = {
  dto: DeleteRole;
};


export type RootMutationTypeCreateUserArgs = {
  dto: CreateUser;
};


export type RootMutationTypeUpdateUserArgs = {
  dto: UpdateUser;
};


export type RootMutationTypeSoftDeleteUserArgs = {
  dto: DeleteUser;
};


export type RootMutationTypeHardDeleteUserArgs = {
  dto: DeleteUser;
};


export type RootMutationTypeRequestForgottenUserPasswordResetArgs = {
  dto: RequestResetForgottenUserPassword;
};


export type RootMutationTypeConsumeForgottenUserPasswordResetArgs = {
  dto: ConsumeResetForgottenUserPassword;
};


export type RootMutationTypeRequestUserWelcomeArgs = {
  dto: RequestUserWelcome;
};


export type RootMutationTypeAcceptUserWelcomeArgs = {
  dto: AcceptUserWelcome;
};


export type RootMutationTypeInitialiseIntegrationArgs = {
  dto: InitialiseIntegration;
};


export type RootMutationTypeGoogleOAuth2HandleCodeArgs = {
  code: Scalars['String'];
};


export type RootMutationTypeGoogleSendEmailArgs = {
  dto: GoogleSendEmail;
};

export type CreateNewsArticle = {
  title: Scalars['String'];
  teaser: Scalars['String'];
  body: Scalars['String'];
};

export type UpdateNewsArticle = {
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  teaser?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type DeleteNewsArticle = {
  id: Scalars['Int'];
};

export type CreateNpmsPackage = {
  name: Scalars['String'];
};

export type SortNpmsDashboard = {
  dashboard_ids: Array<Scalars['Int']>;
};

export type CreateNpmsDashboard = {
  name: Scalars['String'];
  npms_package_ids?: Maybe<Array<Scalars['Int']>>;
};

export type UpdateNpmsDashboard = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  npms_package_ids?: Maybe<Array<Scalars['Int']>>;
};

export type SoftDeleteNpmsDashboard = {
  id: Scalars['Int'];
};

export type HardDeleteNpmsDashboard = {
  id: Scalars['Int'];
};

export type RestoreNpmsDashboard = {
  id: Scalars['Int'];
};

export type SubmitNpmsDashboard = {
  id: Scalars['Int'];
};

export type RejectNpmsDashboard = {
  id: Scalars['Int'];
};

export type ApproveNpmsDashboard = {
  id: Scalars['Int'];
};

export type PublishNpmsDashboard = {
  id: Scalars['Int'];
};

export type UnpublishNpmsDashboard = {
  id: Scalars['Int'];
};

export type CreateNpmsDashboardItem = {
  dashboard_id: Scalars['Int'];
  npms_id: Scalars['Int'];
};

export type SoftDeleteNpmsDashboardItem = {
  id: Scalars['Int'];
};

export type CreateRolePermissionGqlInput = {
  role_id: Scalars['Int'];
  permission_id: Scalars['Int'];
};

export type DeleteRolePermission = {
  role_permission_id: Scalars['Int'];
};

export type CreateRole = {
  name: Scalars['String'];
  permission_ids?: Maybe<Array<Scalars['Int']>>;
};

export type UpdateRole = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  permission_ids?: Maybe<Array<Scalars['Int']>>;
};

export type DeleteRole = {
  id: Scalars['Int'];
};

export type CreateUser = {
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role_ids?: Maybe<Array<Scalars['Int']>>;
};

export type UpdateUser = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  deactivated?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  role_ids?: Maybe<Array<Scalars['Int']>>;
};

export type DeleteUser = {
  id: Scalars['Int'];
};

export type RequestResetForgottenUserPassword = {
  email: Scalars['String'];
};

export type AuthorisationGqlNode = {
  __typename?: 'AuthorisationGqlNode';
  access_token: Scalars['String'];
  refresh_token: Scalars['String'];
  access_token_object: AccessTokenNode;
  refresh_token_object: RefreshTokenNode;
};

export type AccessTokenNode = {
  __typename?: 'AccessTokenNode';
  data: AccessTokenData;
  relations?: Maybe<AccessTokenRelations>;
};

export type AccessTokenData = {
  __typename?: 'AccessTokenData';
  user_id: Scalars['Int'];
  permissions: Array<Scalars['Int']>;
  iat: Scalars['Float'];
  exp: Scalars['Float'];
};

export type AccessTokenRelations = {
  __typename?: 'AccessTokenRelations';
  user?: Maybe<UserNode>;
};

export type RefreshTokenNode = {
  __typename?: 'RefreshTokenNode';
  data: RefreshTokenData;
  relations?: Maybe<RefreshTokenRelations>;
};

export type RefreshTokenData = {
  __typename?: 'RefreshTokenData';
  user_id: Scalars['Int'];
  iat: Scalars['Float'];
  exp: Scalars['Float'];
};

export type RefreshTokenRelations = {
  __typename?: 'RefreshTokenRelations';
  user?: Maybe<UserNode>;
};

export type ConsumeResetForgottenUserPassword = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type RequestUserWelcome = {
  user_id: Scalars['Int'];
};

export type AcceptUserWelcome = {
  token: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type InitialiseIntegration = {
  id: Scalars['Int'];
  init: Scalars['JsonObject'];
};

export type GoogleSendEmail = {
  to: Array<Scalars['String']>;
  cc?: Maybe<Array<Scalars['String']>>;
  subject?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type RequestForgottenUserPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestForgottenUserPasswordResetMutation = (
  { __typename?: 'RootMutationType' }
  & Pick<RootMutationType, 'requestForgottenUserPasswordReset'>
);

export type GoogleOAuth2ConnectorDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GoogleOAuth2ConnectorDataQuery = (
  { __typename?: 'RootQueryType' }
  & { google: (
    { __typename?: 'GoogleNode' }
    & { can: (
      { __typename?: 'GoogleActions' }
      & Pick<GoogleActions, 'oauth2' | 'sendGmail'>
    ), integration: (
      { __typename?: 'IntegrationNode' }
      & { can: (
        { __typename?: 'IntegrationActions' }
        & Pick<IntegrationActions, 'show' | 'initialise'>
      ), data: (
        { __typename?: 'IntegrationData' }
        & Pick<IntegrationData, 'id' | 'name' | 'error' | 'public' | 'is_connected' | 'created_at' | 'updated_at'>
      ) }
    ) }
  ) }
);

export type GoogleOAuth2ConnectorUrlDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GoogleOAuth2ConnectorUrlDataQuery = (
  { __typename?: 'RootQueryType' }
  & Pick<RootQueryType, 'googleOAuth2GetUrl'>
);

export type GoogleOAuth2ConnectorCodeFormMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type GoogleOAuth2ConnectorCodeFormMutation = (
  { __typename?: 'RootMutationType' }
  & { googleOAuth2HandleCode: (
    { __typename?: 'GoogleNode' }
    & { can: (
      { __typename?: 'GoogleActions' }
      & Pick<GoogleActions, 'oauth2' | 'sendGmail'>
    ), integration: (
      { __typename?: 'IntegrationNode' }
      & { can: (
        { __typename?: 'IntegrationActions' }
        & Pick<IntegrationActions, 'show' | 'initialise'>
      ), data: (
        { __typename?: 'IntegrationData' }
        & Pick<IntegrationData, 'id' | 'name' | 'error' | 'public' | 'is_connected' | 'created_at' | 'updated_at'>
      ) }
    ) }
  ) }
);

export type InitialiseIntegrationFormMutationVariables = Exact<{
  id: Scalars['Int'];
  init: Scalars['JsonObject'];
}>;


export type InitialiseIntegrationFormMutation = (
  { __typename?: 'RootMutationType' }
  & { initialiseIntegration: (
    { __typename?: 'IntegrationNode' }
    & { data: (
      { __typename?: 'IntegrationData' }
      & Pick<IntegrationData, 'id' | 'name' | 'error' | 'public' | 'is_connected' | 'created_at' | 'updated_at'>
    ) }
  ) }
);

export type CreateNpmsDashboardFormMutationVariables = Exact<{
  name: Scalars['String'];
  npms_package_ids?: Maybe<Array<Scalars['Int']>>;
}>;


export type CreateNpmsDashboardFormMutation = (
  { __typename?: 'RootMutationType' }
  & { createNpmsDashboard: (
    { __typename?: 'NpmsDashboardNode' }
    & Pick<NpmsDashboardNode, 'cursor'>
    & { can: (
      { __typename?: 'NpmsDashboardActions' }
      & Pick<NpmsDashboardActions, 'show' | 'update' | 'softDelete' | 'hardDelete'>
    ), data: (
      { __typename?: 'NpmsDashboardData' }
      & Pick<NpmsDashboardData, 'id' | 'name'>
    ) }
  ) }
);

export type UpdateNpmsDashboardFormMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
  npms_package_ids?: Maybe<Array<Scalars['Int']>>;
}>;


export type UpdateNpmsDashboardFormMutation = (
  { __typename?: 'RootMutationType' }
  & { updateNpmsDashboard: (
    { __typename?: 'NpmsDashboardNode' }
    & Pick<NpmsDashboardNode, 'cursor'>
    & { can: (
      { __typename?: 'NpmsDashboardActions' }
      & Pick<NpmsDashboardActions, 'show' | 'update' | 'softDelete' | 'hardDelete'>
    ), data: (
      { __typename?: 'NpmsDashboardData' }
      & Pick<NpmsDashboardData, 'id' | 'name'>
    ) }
  ) }
);

export type NpmsDashbortSortFormQueryVariables = Exact<{
  dashboardOffset: Scalars['Int'];
  dashboardLimit: Scalars['Int'];
}>;


export type NpmsDashbortSortFormQuery = (
  { __typename?: 'RootQueryType' }
  & { npmsDashboards: (
    { __typename?: 'NpmsDashboardCollectionNode' }
    & { can: (
      { __typename?: 'NpmsDashboardCollectionActions' }
      & Pick<NpmsDashboardCollectionActions, 'show' | 'create'>
    ), pagination: (
      { __typename?: 'meta' }
      & Pick<Meta, 'limit' | 'offset' | 'total' | 'page_number' | 'pages' | 'more'>
    ), nodes: Array<Maybe<(
      { __typename?: 'NpmsDashboardNode' }
      & Pick<NpmsDashboardNode, 'cursor'>
      & { can: (
        { __typename?: 'NpmsDashboardActions' }
        & Pick<NpmsDashboardActions, 'show' | 'update' | 'softDelete' | 'hardDelete'>
      ), data: (
        { __typename?: 'NpmsDashboardData' }
        & Pick<NpmsDashboardData, 'id' | 'name' | 'created_at' | 'updated_at' | 'deleted_at'>
      ) }
    )>> }
  ) }
);

export type NpmsDashbortSortFormSubmitMutationVariables = Exact<{
  dashboard_ids: Array<Scalars['Int']>;
}>;


export type NpmsDashbortSortFormSubmitMutation = (
  { __typename?: 'RootMutationType' }
  & Pick<RootMutationType, 'sortNpmsDashboards'>
);

export type NpmsDashboardSoftDeleteDashboardMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type NpmsDashboardSoftDeleteDashboardMutation = (
  { __typename?: 'RootMutationType' }
  & Pick<RootMutationType, 'softDeleteNpmsDashboard'>
);

export type SearchNpmsPackageQueryVariables = Exact<{
  likeName?: Maybe<Scalars['String']>;
}>;


export type SearchNpmsPackageQuery = (
  { __typename?: 'RootQueryType' }
  & { npmsPackages: (
    { __typename?: 'NpmsPackageCollectionNode' }
    & { pagination: (
      { __typename?: 'meta' }
      & Pick<Meta, 'limit' | 'offset' | 'total' | 'page_number' | 'pages' | 'more'>
    ), nodes: Array<Maybe<(
      { __typename?: 'NpmsPackageNode' }
      & { data: (
        { __typename?: 'NpmsPackageData' }
        & Pick<NpmsPackageData, 'id' | 'name'>
      ) }
    )>> }
  ) }
);

export type CreateNpmsPackageFormMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateNpmsPackageFormMutation = (
  { __typename?: 'RootMutationType' }
  & { createNpmsPackage: (
    { __typename?: 'NpmsPackageNode' }
    & Pick<NpmsPackageNode, 'cursor'>
    & { can: (
      { __typename?: 'NpmsPackageActions' }
      & Pick<NpmsPackageActions, 'show' | 'softDelete' | 'hardDelete'>
    ), data: (
      { __typename?: 'NpmsPackageData' }
      & Pick<NpmsPackageData, 'id' | 'name'>
    ) }
  ) }
);

export type MutateRoleFromCreateMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type MutateRoleFromCreateMutation = (
  { __typename?: 'RootMutationType' }
  & { createRole: (
    { __typename?: 'RoleNode' }
    & { can: (
      { __typename?: 'RoleActions' }
      & Pick<RoleActions, 'show' | 'update' | 'softDelete' | 'hardDelete' | 'createRolePermissions'>
    ), data: (
      { __typename?: 'RoleData' }
      & Pick<RoleData, 'id' | 'name'>
    ) }
  ) }
);

export type MutateRoleFormUpdateMutationVariables = Exact<{
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
}>;


export type MutateRoleFormUpdateMutation = (
  { __typename?: 'RootMutationType' }
  & { updateRole: (
    { __typename?: 'RoleNode' }
    & { can: (
      { __typename?: 'RoleActions' }
      & Pick<RoleActions, 'show' | 'update' | 'softDelete' | 'hardDelete' | 'createRolePermissions'>
    ), data: (
      { __typename?: 'RoleData' }
      & Pick<RoleData, 'id' | 'name'>
    ) }
  ) }
);

export type RoleRolePermissionsFormDataQueryVariables = Exact<{
  id: Scalars['Float'];
  rolesPermissionsLimit: Scalars['Int'];
  rolesPermissionsOffset: Scalars['Int'];
  permissionsLimit: Scalars['Int'];
  permissionsOffset: Scalars['Int'];
}>;


export type RoleRolePermissionsFormDataQuery = (
  { __typename?: 'RootQueryType' }
  & { roles: (
    { __typename?: 'RoleCollectionNode' }
    & { nodes: Array<Maybe<(
      { __typename?: 'RoleNode' }
      & { can: (
        { __typename?: 'RoleActions' }
        & Pick<RoleActions, 'createRolePermissions' | 'hardDeleteRolePermissions'>
      ), data: (
        { __typename?: 'RoleData' }
        & Pick<RoleData, 'id' | 'name'>
      ), relations: (
        { __typename?: 'RoleRelations' }
        & { permissions: (
          { __typename?: 'PermissionCollectionNode' }
          & { pagination: (
            { __typename?: 'meta' }
            & Pick<Meta, 'limit' | 'offset' | 'total' | 'page_number' | 'pages' | 'more'>
          ), nodes: Array<Maybe<(
            { __typename?: 'PermissionNode' }
            & { can: (
              { __typename?: 'PermissionActions' }
              & Pick<PermissionActions, 'createRolePermissions' | 'hardDeleteRolePermissions'>
            ), data: (
              { __typename?: 'PermissionData' }
              & Pick<PermissionData, 'id' | 'name'>
            ) }
          )>> }
        ) }
      ) }
    )>> }
  ), permissions: (
    { __typename?: 'PermissionCollectionNode' }
    & { nodes: Array<Maybe<(
      { __typename?: 'PermissionNode' }
      & { can: (
        { __typename?: 'PermissionActions' }
        & Pick<PermissionActions, 'createRolePermissions' | 'hardDeleteRolePermissions'>
      ), data: (
        { __typename?: 'PermissionData' }
        & Pick<PermissionData, 'id' | 'name'>
      ) }
    )>> }
  ) }
);

export type RoleRolePermissionFormUpdateMutationVariables = Exact<{
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  permission_ids?: Maybe<Array<Scalars['Int']>>;
}>;


export type RoleRolePermissionFormUpdateMutation = (
  { __typename?: 'RootMutationType' }
  & { updateRole: (
    { __typename?: 'RoleNode' }
    & { data: (
      { __typename?: 'RoleData' }
      & Pick<RoleData, 'id' | 'name'>
    ) }
  ) }
);

export type RoleDetailDataQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type RoleDetailDataQuery = (
  { __typename?: 'RootQueryType' }
  & { roles: (
    { __typename?: 'RoleCollectionNode' }
    & { nodes: Array<Maybe<(
      { __typename?: 'RoleNode' }
      & { can: (
        { __typename?: 'RoleActions' }
        & Pick<RoleActions, 'show' | 'update' | 'softDelete' | 'hardDelete' | 'createRolePermissions'>
      ), data: (
        { __typename?: 'RoleData' }
        & Pick<RoleData, 'id' | 'name'>
      ) }
    )>> }
  ) }
);

export type RolesTableDataQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type RolesTableDataQuery = (
  { __typename?: 'RootQueryType' }
  & { roles: (
    { __typename?: 'RoleCollectionNode' }
    & { pagination: (
      { __typename?: 'meta' }
      & Pick<Meta, 'limit' | 'offset' | 'total' | 'page_number' | 'pages' | 'more'>
    ), can: (
      { __typename?: 'RoleCollectionActions' }
      & Pick<RoleCollectionActions, 'show' | 'create'>
    ), nodes: Array<Maybe<(
      { __typename?: 'RoleNode' }
      & { can: (
        { __typename?: 'RoleActions' }
        & Pick<RoleActions, 'show' | 'update' | 'softDelete' | 'hardDelete'>
      ), data: (
        { __typename?: 'RoleData' }
        & Pick<RoleData, 'id' | 'name' | 'created_at' | 'updated_at' | 'deleted_at'>
      ) }
    )>> }
  ) }
);

export type RoleTableDeleteMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RoleTableDeleteMutation = (
  { __typename?: 'RootMutationType' }
  & Pick<RootMutationType, 'softDeleteRole'>
);

export type UserMutateFormCreateMutationVariables = Exact<{
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}>;


export type UserMutateFormCreateMutation = (
  { __typename?: 'RootMutationType' }
  & { createUser: (
    { __typename?: 'UserNode' }
    & { can: (
      { __typename?: 'UserActions' }
      & Pick<UserActions, 'show' | 'update' | 'softDelete' | 'hardDelete'>
    ), data: (
      { __typename?: 'UserData' }
      & Pick<UserData, 'id' | 'name' | 'created_at' | 'updated_at' | 'deleted_at'>
    ) }
  ) }
);

export type UserMutateFormUpdateMutationVariables = Exact<{
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  deactivated?: Maybe<Scalars['Boolean']>;
}>;


export type UserMutateFormUpdateMutation = (
  { __typename?: 'RootMutationType' }
  & { updateUser: (
    { __typename?: 'UserNode' }
    & { can: (
      { __typename?: 'UserActions' }
      & Pick<UserActions, 'show' | 'update' | 'softDelete' | 'hardDelete'>
    ), data: (
      { __typename?: 'UserData' }
      & Pick<UserData, 'id' | 'name' | 'created_at' | 'updated_at' | 'deleted_at'>
    ) }
  ) }
);

export type UserUserRolesFormDataQueryVariables = Exact<{
  id: Scalars['Float'];
  userRolesLimit: Scalars['Int'];
  userRolesOffset: Scalars['Int'];
  rolesLimit: Scalars['Int'];
  rolesOffset: Scalars['Int'];
}>;


export type UserUserRolesFormDataQuery = (
  { __typename?: 'RootQueryType' }
  & { users: (
    { __typename?: 'UserCollectionNode' }
    & { nodes: Array<Maybe<(
      { __typename?: 'UserNode' }
      & { can: (
        { __typename?: 'UserActions' }
        & Pick<UserActions, 'createUserRoles' | 'hardDeleteUserRoles'>
      ), data: (
        { __typename?: 'UserData' }
        & Pick<UserData, 'id' | 'name'>
      ), relations: (
        { __typename?: 'UserRelations' }
        & { roles: (
          { __typename?: 'RoleCollectionNode' }
          & { pagination: (
            { __typename?: 'meta' }
            & Pick<Meta, 'limit' | 'offset' | 'total' | 'page_number' | 'pages' | 'more'>
          ), nodes: Array<Maybe<(
            { __typename?: 'RoleNode' }
            & { can: (
              { __typename?: 'RoleActions' }
              & Pick<RoleActions, 'createUserRoles' | 'hardDeleteUserRoles'>
            ), data: (
              { __typename?: 'RoleData' }
              & Pick<RoleData, 'id' | 'name'>
            ) }
          )>> }
        ) }
      ) }
    )>> }
  ), roles: (
    { __typename?: 'RoleCollectionNode' }
    & { nodes: Array<Maybe<(
      { __typename?: 'RoleNode' }
      & { can: (
        { __typename?: 'RoleActions' }
        & Pick<RoleActions, 'show' | 'createUserRoles' | 'hardDeleteUserRoles'>
      ), data: (
        { __typename?: 'RoleData' }
        & Pick<RoleData, 'id' | 'name'>
      ) }
    )>> }
  ) }
);

export type UserUserRolesFormUpdateMutationVariables = Exact<{
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  role_ids?: Maybe<Array<Scalars['Int']>>;
}>;


export type UserUserRolesFormUpdateMutation = (
  { __typename?: 'RootMutationType' }
  & { updateUser: (
    { __typename?: 'UserNode' }
    & { data: (
      { __typename?: 'UserData' }
      & Pick<UserData, 'id' | 'name'>
    ) }
  ) }
);

export type UserDetailDataQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type UserDetailDataQuery = (
  { __typename?: 'RootQueryType' }
  & { users: (
    { __typename?: 'UserCollectionNode' }
    & { can: (
      { __typename?: 'UserCollectionActions' }
      & Pick<UserCollectionActions, 'show' | 'create'>
    ), pagination: (
      { __typename?: 'meta' }
      & Pick<Meta, 'limit' | 'offset' | 'total' | 'page_number' | 'pages' | 'more'>
    ), nodes: Array<Maybe<(
      { __typename?: 'UserNode' }
      & { can: (
        { __typename?: 'UserActions' }
        & Pick<UserActions, 'show' | 'update' | 'softDelete' | 'hardDelete' | 'deactivate' | 'updatePassword' | 'requestWelcome' | 'acceptWelcome' | 'requestVerificationEmail' | 'requestEmailChange' | 'requestForgottenPasswordReset'>
      ), data: (
        { __typename?: 'UserData' }
        & Pick<UserData, 'id' | 'name' | 'email' | 'verified' | 'deactivated' | 'created_at' | 'updated_at' | 'deleted_at'>
      ) }
    )>> }
  ) }
);

export type UserDetailRequestSendWelcomeEmailMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UserDetailRequestSendWelcomeEmailMutation = (
  { __typename?: 'RootMutationType' }
  & Pick<RootMutationType, 'requestUserWelcome'>
);

export type UserDetailRequestForgottenUserPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type UserDetailRequestForgottenUserPasswordResetMutation = (
  { __typename?: 'RootMutationType' }
  & Pick<RootMutationType, 'requestForgottenUserPasswordReset'>
);

export type UsersTableDataQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type UsersTableDataQuery = (
  { __typename?: 'RootQueryType' }
  & { users: (
    { __typename?: 'UserCollectionNode' }
    & { pagination: (
      { __typename?: 'meta' }
      & Pick<Meta, 'limit' | 'offset' | 'total' | 'page_number' | 'pages' | 'more'>
    ), can: (
      { __typename?: 'UserCollectionActions' }
      & Pick<UserCollectionActions, 'show' | 'create'>
    ), nodes: Array<Maybe<(
      { __typename?: 'UserNode' }
      & { can: (
        { __typename?: 'UserActions' }
        & Pick<UserActions, 'show' | 'update' | 'softDelete' | 'hardDelete'>
      ), data: (
        { __typename?: 'UserData' }
        & Pick<UserData, 'id' | 'name' | 'created_at' | 'updated_at' | 'deleted_at'>
      ) }
    )>> }
  ) }
);

export type UsersTableDeleteMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UsersTableDeleteMutation = (
  { __typename?: 'RootMutationType' }
  & Pick<RootMutationType, 'softDeleteUser'>
);

export type JsPageDashboardQueryVariables = Exact<{
  dashboardOffset?: Maybe<Scalars['Int']>;
  dashboardLimit?: Maybe<Scalars['Int']>;
  packageOffset?: Maybe<Scalars['Int']>;
  packageLimit?: Maybe<Scalars['Int']>;
}>;


export type JsPageDashboardQuery = (
  { __typename?: 'RootQueryType' }
  & { npmsDashboards: (
    { __typename?: 'NpmsDashboardCollectionNode' }
    & { can: (
      { __typename?: 'NpmsDashboardCollectionActions' }
      & Pick<NpmsDashboardCollectionActions, 'show' | 'sort' | 'create'>
    ), pagination: (
      { __typename?: 'meta' }
      & Pick<Meta, 'limit' | 'offset' | 'total' | 'page_number' | 'pages' | 'more'>
    ), nodes: Array<Maybe<(
      { __typename?: 'NpmsDashboardNode' }
      & Pick<NpmsDashboardNode, 'cursor'>
      & { can: (
        { __typename?: 'NpmsDashboardActions' }
        & Pick<NpmsDashboardActions, 'show' | 'update' | 'softDelete' | 'hardDelete'>
      ), data: (
        { __typename?: 'NpmsDashboardData' }
        & Pick<NpmsDashboardData, 'id' | 'name'>
      ), relations: (
        { __typename?: 'NpmsDashboardRelations' }
        & { npmsPackages: (
          { __typename?: 'NpmsPackageCollectionNode' }
          & { can: (
            { __typename?: 'NpmsPackageCollectionActions' }
            & Pick<NpmsPackageCollectionActions, 'show' | 'create'>
          ), pagination: (
            { __typename?: 'meta' }
            & Pick<Meta, 'limit' | 'offset' | 'total' | 'page_number' | 'pages' | 'more'>
          ), nodes: Array<Maybe<(
            { __typename?: 'NpmsPackageNode' }
            & Pick<NpmsPackageNode, 'cursor'>
            & { can: (
              { __typename?: 'NpmsPackageActions' }
              & Pick<NpmsPackageActions, 'show' | 'softDelete' | 'hardDelete'>
            ), data: (
              { __typename?: 'NpmsPackageData' }
              & Pick<NpmsPackageData, 'id' | 'name' | 'last_ran_at' | 'created_at' | 'updated_at'>
              & { data?: Maybe<(
                { __typename?: 'NpmsPackageDataInfo' }
                & { score?: Maybe<(
                  { __typename?: 'NpmsPackageDataInfoScore' }
                  & Pick<NpmsPackageDataInfoScore, 'final'>
                  & { detail?: Maybe<(
                    { __typename?: 'NpmsPackageDataInfoScoreDetail' }
                    & Pick<NpmsPackageDataInfoScoreDetail, 'quality' | 'popularity' | 'maintenance'>
                  )> }
                )>, evaluation?: Maybe<(
                  { __typename?: 'NpmsPackageDataInfoEvaluation' }
                  & { quality?: Maybe<(
                    { __typename?: 'NpmsPackageDataInfoEvaluationQuality' }
                    & Pick<NpmsPackageDataInfoEvaluationQuality, 'carefulness' | 'tests' | 'health' | 'branding'>
                  )>, popularity?: Maybe<(
                    { __typename?: 'NpmsPackageDataInfoEvaluationPopularity' }
                    & Pick<NpmsPackageDataInfoEvaluationPopularity, 'communityInterest' | 'downloadsCount' | 'downloadsAcceleration' | 'dependentsCount'>
                  )>, maintenance?: Maybe<(
                    { __typename?: 'NpmsPackageDataInfoEvaluationMaintenance' }
                    & Pick<NpmsPackageDataInfoEvaluationMaintenance, 'releasesFrequency' | 'commitsFrequency' | 'openIssues' | 'issuesDistribution'>
                  )> }
                )>, collected?: Maybe<(
                  { __typename?: 'NpmsPackageDataInfoCollected' }
                  & { metadata?: Maybe<(
                    { __typename?: 'NpmsPackageDataInfoCollectedMetadata' }
                    & Pick<NpmsPackageDataInfoCollectedMetadata, 'hasTestScript' | 'hasSelectiveFiles' | 'name'>
                  )>, github?: Maybe<(
                    { __typename?: 'NpmsPackageDataInfoCollectedGithub' }
                    & Pick<NpmsPackageDataInfoCollectedGithub, 'starsCount' | 'forksCount' | 'subscribersCount'>
                    & { commits?: Maybe<Array<(
                      { __typename?: 'NpmsPackageDataInfCollectedGitHubCommit' }
                      & Pick<NpmsPackageDataInfCollectedGitHubCommit, 'from' | 'to' | 'count'>
                    )>>, issues?: Maybe<(
                      { __typename?: 'NpmsPackageDataInfoCollectedGithubIssues' }
                      & Pick<NpmsPackageDataInfoCollectedGithubIssues, 'count' | 'openCount' | 'isDisabled'>
                    )> }
                  )>, npm?: Maybe<(
                    { __typename?: 'NpmsPackageDataInfoCollectedNpm' }
                    & Pick<NpmsPackageDataInfoCollectedNpm, 'starsCount' | 'dependentsCount' | 'dependencies' | 'devDependencies'>
                    & { downloads?: Maybe<(
                      { __typename?: 'NpmsPackageDataInfoCollectedNpmDownloads' }
                      & Pick<NpmsPackageDataInfoCollectedNpmDownloads, 'from' | 'to' | 'count'>
                    )> }
                  )> }
                )> }
              )> }
            ) }
          )>> }
        ) }
      ) }
    )>> }
  ) }
);

export type CreateNewsArticleMutationVariables = Exact<{
  title: Scalars['String'];
  teaser: Scalars['String'];
  body: Scalars['String'];
}>;


export type CreateNewsArticleMutation = (
  { __typename?: 'RootMutationType' }
  & { createNewsArticle: (
    { __typename?: 'NewsArticleNode' }
    & { data: (
      { __typename?: 'NewsArticleData' }
      & Pick<NewsArticleData, 'id' | 'title' | 'teaser' | 'body' | 'author_id' | 'created_at' | 'updated_at' | 'deleted_at'>
    ) }
  ) }
);

export type EditNewsArticlePageQueryVariables = Exact<{
  news_article_id: Scalars['Float'];
}>;


export type EditNewsArticlePageQuery = (
  { __typename?: 'RootQueryType' }
  & { newsArticles: (
    { __typename?: 'NewsArticleCollectionNode' }
    & { nodes: Array<Maybe<(
      { __typename?: 'NewsArticleNode' }
      & Pick<NewsArticleNode, 'cursor'>
      & { can: (
        { __typename?: 'NewsArticleActions' }
        & Pick<NewsArticleActions, 'show' | 'update' | 'softDelete' | 'hardDelete'>
      ), data: (
        { __typename?: 'NewsArticleData' }
        & Pick<NewsArticleData, 'id' | 'title' | 'teaser' | 'body' | 'author_id' | 'created_at' | 'updated_at' | 'deleted_at'>
      ), relations: (
        { __typename?: 'NewsArticleRelations' }
        & { author?: Maybe<(
          { __typename?: 'UserNode' }
          & { data: (
            { __typename?: 'UserData' }
            & Pick<UserData, 'id' | 'name' | 'created_at' | 'updated_at' | 'deleted_at'>
          ) }
        )> }
      ) }
    )>> }
  ) }
);

export type UpdateNewsArticleMutationVariables = Exact<{
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  teaser?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
}>;


export type UpdateNewsArticleMutation = (
  { __typename?: 'RootMutationType' }
  & { updateNewsArticle: (
    { __typename?: 'NewsArticleNode' }
    & { data: (
      { __typename?: 'NewsArticleData' }
      & Pick<NewsArticleData, 'id' | 'title' | 'teaser' | 'body' | 'author_id' | 'created_at' | 'updated_at' | 'deleted_at'>
    ) }
  ) }
);

export type IndexNewsPageQueryVariables = Exact<{
  news_offset?: Maybe<Scalars['Int']>;
  news_limit?: Maybe<Scalars['Int']>;
}>;


export type IndexNewsPageQuery = (
  { __typename?: 'RootQueryType' }
  & { newsArticles: (
    { __typename?: 'NewsArticleCollectionNode' }
    & { pagination: (
      { __typename?: 'meta' }
      & Pick<Meta, 'limit' | 'offset' | 'total' | 'page_number' | 'pages' | 'more'>
    ), can: (
      { __typename?: 'NewsArticleCollectionActions' }
      & Pick<NewsArticleCollectionActions, 'show' | 'create'>
    ), nodes: Array<Maybe<(
      { __typename?: 'NewsArticleNode' }
      & Pick<NewsArticleNode, 'cursor'>
      & { can: (
        { __typename?: 'NewsArticleActions' }
        & Pick<NewsArticleActions, 'show' | 'update' | 'softDelete' | 'hardDelete'>
      ), data: (
        { __typename?: 'NewsArticleData' }
        & Pick<NewsArticleData, 'id' | 'title' | 'teaser' | 'body' | 'author_id' | 'created_at' | 'updated_at' | 'deleted_at'>
      ), relations: (
        { __typename?: 'NewsArticleRelations' }
        & { author?: Maybe<(
          { __typename?: 'UserNode' }
          & Pick<UserNode, 'cursor'>
          & { can: (
            { __typename?: 'UserActions' }
            & Pick<UserActions, 'show' | 'update' | 'softDelete' | 'hardDelete'>
          ), data: (
            { __typename?: 'UserData' }
            & Pick<UserData, 'id' | 'name' | 'created_at' | 'updated_at' | 'deleted_at'>
          ) }
        )> }
      ) }
    )>> }
  ) }
);

export type ViewNewsArticlePageQueryVariables = Exact<{
  news_article_id: Scalars['Float'];
}>;


export type ViewNewsArticlePageQuery = (
  { __typename?: 'RootQueryType' }
  & { newsArticles: (
    { __typename?: 'NewsArticleCollectionNode' }
    & { nodes: Array<Maybe<(
      { __typename?: 'NewsArticleNode' }
      & Pick<NewsArticleNode, 'cursor'>
      & { can: (
        { __typename?: 'NewsArticleActions' }
        & Pick<NewsArticleActions, 'show' | 'update' | 'softDelete' | 'hardDelete'>
      ), data: (
        { __typename?: 'NewsArticleData' }
        & Pick<NewsArticleData, 'id' | 'title' | 'teaser' | 'body' | 'author_id' | 'created_at' | 'updated_at' | 'deleted_at'>
      ), relations: (
        { __typename?: 'NewsArticleRelations' }
        & { author?: Maybe<(
          { __typename?: 'UserNode' }
          & { data: (
            { __typename?: 'UserData' }
            & Pick<UserData, 'id' | 'name' | 'created_at' | 'updated_at' | 'deleted_at'>
          ) }
        )> }
      ) }
    )>> }
  ) }
);

export type PasswordResetPageDataQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type PasswordResetPageDataQuery = (
  { __typename?: 'RootQueryType' }
  & { userByToken: (
    { __typename?: 'UserNode' }
    & { can: (
      { __typename?: 'UserActions' }
      & Pick<UserActions, 'show' | 'acceptWelcome'>
    ), data: (
      { __typename?: 'UserData' }
      & Pick<UserData, 'id' | 'name' | 'deactivated' | 'email' | 'verified' | 'created_at' | 'updated_at' | 'deleted_at'>
    ) }
  ) }
);

export type PasswordResetPageConsumeResetMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type PasswordResetPageConsumeResetMutation = (
  { __typename?: 'RootMutationType' }
  & { consumeForgottenUserPasswordReset: (
    { __typename?: 'AuthorisationGqlNode' }
    & Pick<AuthorisationGqlNode, 'access_token' | 'refresh_token'>
    & { access_token_object: (
      { __typename?: 'AccessTokenNode' }
      & { data: (
        { __typename?: 'AccessTokenData' }
        & Pick<AccessTokenData, 'user_id' | 'permissions' | 'iat' | 'exp'>
      ), relations?: Maybe<(
        { __typename?: 'AccessTokenRelations' }
        & { user?: Maybe<(
          { __typename?: 'UserNode' }
          & { data: (
            { __typename?: 'UserData' }
            & Pick<UserData, 'id' | 'name'>
          ) }
        )> }
      )> }
    ), refresh_token_object: (
      { __typename?: 'RefreshTokenNode' }
      & { data: (
        { __typename?: 'RefreshTokenData' }
        & Pick<RefreshTokenData, 'user_id' | 'iat' | 'exp'>
      ) }
    ) }
  ) }
);

export type WelcomePageDataQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type WelcomePageDataQuery = (
  { __typename?: 'RootQueryType' }
  & { userByToken: (
    { __typename?: 'UserNode' }
    & { can: (
      { __typename?: 'UserActions' }
      & Pick<UserActions, 'show' | 'acceptWelcome'>
    ), data: (
      { __typename?: 'UserData' }
      & Pick<UserData, 'id' | 'name' | 'deactivated' | 'email' | 'verified' | 'created_at' | 'updated_at' | 'deleted_at'>
    ) }
  ) }
);

export type WelcomePageAcceptWelcomeMutationVariables = Exact<{
  token: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type WelcomePageAcceptWelcomeMutation = (
  { __typename?: 'RootMutationType' }
  & { acceptUserWelcome: (
    { __typename?: 'AuthorisationGqlNode' }
    & Pick<AuthorisationGqlNode, 'access_token' | 'refresh_token'>
    & { access_token_object: (
      { __typename?: 'AccessTokenNode' }
      & { data: (
        { __typename?: 'AccessTokenData' }
        & Pick<AccessTokenData, 'user_id' | 'permissions' | 'iat' | 'exp'>
      ), relations?: Maybe<(
        { __typename?: 'AccessTokenRelations' }
        & { user?: Maybe<(
          { __typename?: 'UserNode' }
          & { data: (
            { __typename?: 'UserData' }
            & Pick<UserData, 'id' | 'name'>
          ) }
        )> }
      )> }
    ), refresh_token_object: (
      { __typename?: 'RefreshTokenNode' }
      & { data: (
        { __typename?: 'RefreshTokenData' }
        & Pick<RefreshTokenData, 'user_id' | 'iat' | 'exp'>
      ) }
    ) }
  ) }
);
