import { GraphQLNonNull } from "graphql";
import { GqlEdge, IGqlEdge } from "../../../common/gql/gql.edge";
import { IUserGqlNode, UserGqlNode } from "./user.gql.node";

export type IUserGqlEdge = IGqlEdge<IUserGqlNode>
export const UserGqlEdge = GqlEdge({
  name: 'UserEdge',
  node: () => GraphQLNonNull(UserGqlNode),
});