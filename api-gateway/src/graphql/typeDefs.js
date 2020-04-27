import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type Listing {
    description: String!
    id: ID!
    title: String!
  }

  """
  Description of the user type
  """
  type User {
    "Description of the email field"
    email: String!
    id: ID!
  }

  "The User Session"
  type UserSession {
    """
    When the session was created
    """
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
  }

  type Mutation {
    createListing(description: String!, title: String!): Listing!
    createUser(email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
    deleteUserSession(sessionId: ID!): Boolean!
  }

  type Query {
    listings: [Listing!]!
    userSession(me: Boolean!): UserSession
  }
`;

export default typeDefs;
