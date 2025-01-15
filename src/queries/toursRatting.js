import { gql } from '@apollo/client';

export const INSERT_TOURS_REVIEW = gql`
  mutation MyMutation($client_id: uuid!, $comment: String = "", $stars: Int = 10, $tour_id: bigint = "") {
    insert_tour_reviews_one(object: {client_id: $client_id, comment: $comment, stars: $stars, tour_id: $tour_id}) {
      id
    }
  }
`;