import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query GetEvents {
    getAllEvents {
      title
      date
      price
      description
      quantity
      id
    }
  }
`;
export const SEND_CODE = gql`
  query ($email: String!) {
    requestCode(email: $email)
  }
`;
