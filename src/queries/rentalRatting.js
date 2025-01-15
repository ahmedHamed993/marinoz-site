import { gql } from '@apollo/client';

export const INSERT_RENTAL_REVIEW = gql`
  mutation MyMutation($clientId: uuid!, $comment: String!, $rentalId: bigint!, $stars: Int!) {
    insert_rental_reviews_one(object: { client_id: $clientId, comment: $comment, rental_id: $rentalId, stars: $stars }) {
      id
    }
  }
`;