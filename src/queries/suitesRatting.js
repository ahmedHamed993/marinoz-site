import { gql } from '@apollo/client';

export const INSERT_RENTAL_REVIEW = gql`
  mutation MyMutation($client_id: uuid = "", $client_id1: uuid = "", $comment: String = "", $stars: Int = 10, $suite_id: bigint = "") {
    insert_suite_reviews_one(object: {client_id: $client_id1, comment: $comment, stars: $stars, suite_id: $suite_id}) {
      id
    }
  }
`;