// src/queries.js
import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query {
    hotels {
      id
      name
      img
      location
      opportunity
      info
      rooms {
        id
        opportunity
      }
    }
  }
`;
