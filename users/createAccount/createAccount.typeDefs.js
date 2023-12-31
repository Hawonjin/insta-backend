import { gql } from "apollo-server-core";

export default gql`
    type User{
        id: String!
        firstName: String!
        lastName: String
        username: String!
        email: String!
        createdAt: String!
        updatedAt: String!
    }
    type Mutation{
        createAccount(
            id: String!
            firstName: String!
            lastName: String
            username: String!
            email: String!
            password: String!
        ): User!
    }
`