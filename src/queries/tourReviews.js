import { gql } from "@apollo/client";

export const POST_TOUR_REVIEW = gql`
  mutation MyMutation {
    insert_tour_reviews(
      objects: { client_id: "", comment: "", stars: 10, tour_id: "1" }
    ) {
      returning {
        id
      }
    }
  }
`;
